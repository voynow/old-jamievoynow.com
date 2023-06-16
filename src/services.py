import os
import random
import requests
import json
import openai
from git2vec import loader
from llm_blocks import chat_utils
import src.config as config

def fetch_projects_info(app):
    """Fetch pinned projects from GitHub"""
    app.logger.info("Fetching project info")
    endpoint = "https://api.github.com/graphql"
    headers = {"Authorization": f"Bearer {os.environ['GH_TOKEN']}"}

    response = requests.post(
        endpoint,
        json={"query": config.GH_GRAPHQL_QUERY % config.GITHUB_USERNAME},
        headers=headers,
    ).json()
    app.logger.debug(f"Received response {response}")

    edges = response["data"]["user"]["pinnedItems"]["edges"]
    return {
        node["node"]["name"]: {
            "name": node["node"]["name"],
            "description": node["node"]["description"],
            "url": node["node"]["url"],
        }
        for node in edges
    }


def get_computer_response(app, project_name, query):
    """Chat with an LLM given the repo as context"""
    app.logger.info(f"Handling chat for project {project_name} with query {query}")
    github_url = config.PROFILE_INFO["github"]
    repo_url = f"{github_url}/{project_name}"
    repo_docs = loader.pull_code_from_repo(repo_url)
    repo_str = loader.docs_to_str(repo_docs)

    try:
        project_chat_chain = chat_utils.GenericChain(template=config.TEMPLATE)
        response = project_chat_chain(repo_url=repo_url, repo=repo_str, query=query)["text"]
        app.logger.error(f"Received response {response}")
    except openai.error.InvalidRequestError:
        app.logger.error("Failed to generate a response due to context length limitations")
        response = "I'm sorry, this repo is not supported yet due to context length limitations. We are actively working on fixing this!"
    return response


def fetch_recommended_queries(app, project_name):
    """Fetch recommended queries for a given repository"""
    return random.sample(config.QUERIES, 3)