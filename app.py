from flask import Flask, render_template
from flask_caching import Cache
import json
import logging
from flask_socketio import SocketIO, send, emit
from git2vec import loader
from repo_chat import chat_utils
import openai


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
    return json.load(open("static/projects.json", "r"))


def fetch_project(project_name):
    for project in fetch_projects_info():
        if project["title"] == project_name:
            return project
    return None


def get_computer_response(data):
    """Chat with an LLM given the repo as context"""
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


@app.route("/")
@cache.cached(timeout=50)
def home():
    profile = fetch_profile_info()
    projects = fetch_projects_info()
    return render_template("home.html", profile=profile, projects=projects)


@app.route("/projects/<project_name>")
@cache.cached(timeout=50)
def project_detail(project_name):
    app.logger.info(f"Project {project_name} page accessed")
    project = fetch_project(project_name)
    return render_template("project.html", project=project)


@socketio.on("message")
def handle_message(data):
    response = get_computer_response(data)
    send(response, broadcast=True)


@app.errorhandler(404)
def page_not_found(e):
    app.logger.error("Page not found")
    return render_template("404.html"), 404
