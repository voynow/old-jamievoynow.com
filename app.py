from flask import Flask, render_template
from flask_caching import Cache
from flask_socketio import SocketIO, send, emit
from git2vec import loader
import json
import logging
import openai
import os
from repo_chat import chat_utils
import requests


GH_GRAPHQL_QUERY = """
query {
  user(login: "%s") {
    pinnedItems(first: 6, types: [REPOSITORY]) {
      edges {
        node {
          ... on Repository {
            name
            description
            url
            stargazers {
              totalCount
            }
            forks {
              totalCount
            }
          }
        }
      }
    }
  }
}
"""


def fetch_profile_info():
    profile_info = {
        "name": "Jamie Voynow",
        "bio": "Software Engineer @ Vanguard",
        "image": "/static/headshot.jpg",
        "linkedin": "https://www.linkedin.com/in/voynow/",
        "github": "https://github.com/voynow",
    }
    return profile_info


def fetch_projects_info():
    """Fetch pinned projects from GitHub"""
    endpoint = "https://api.github.com/graphql"
    headers = {"Authorization": f"Bearer {os.environ['GH_TOKEN']}"}
    username = "voynow"

    response = requests.post(
        endpoint,
        json={"query": GH_GRAPHQL_QUERY % username},
        headers=headers,
    ).json()

    edges = response["data"]["user"]["pinnedItems"]["edges"]
    return {
        node["node"]["name"]: {
            "name": node["node"]["name"],
            "description": node["node"]["description"],
            "url": node["node"]["url"],
        }
        for node in edges
    }


def get_computer_response(data):
    """Chat with an LLM given the repo as context"""
    print(data)
    repo_name = f"https://github.com/voynow/{data['project']}"
    raw_repo = loader.load(repo_name, return_str=True)

    try:
        chain = chat_utils.RawChain(raw_repo)
        response = chain.chat(data["msg"])["text"]
    except openai.error.InvalidRequestError:
        response = "I'm sorry, this repo is not supported yet due to context length limitations. We are actively working on fixing this!"
    return response


app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

# Configure caching
cache = Cache(app, config={"CACHE_TYPE": "simple"})

# Configure logging
handler = logging.FileHandler("app.log")
handler.setLevel(logging.INFO)
app.logger.addHandler(handler)
PROJECTS = fetch_projects_info()


@app.route("/")
@cache.cached(timeout=50)
def home():
    profile = fetch_profile_info()
    project_objs = [value for _, value in PROJECTS.items()]
    return render_template("home.html", profile=profile, projects=project_objs)


@app.route("/projects/<project_name>")
@cache.cached(timeout=50)
def project_detail(project_name):
    app.logger.info(f"Project {project_name} page accessed")
    project = PROJECTS[project_name]
    return render_template("project.html", project=project)


@socketio.on("message")
def handle_message(data):
    response = get_computer_response(data)
    send(response, broadcast=True)


@app.errorhandler(404)
def page_not_found(e):
    app.logger.error("Page not found")
    return render_template("404.html"), 404
