import os
import random
import requests
import json
import openai
from git2vec import loader
from llm_blocks import chat_utils
import src.config as config

def fetch_projects_info():
    """Fetch pinned projects from GitHub"""
    endpoint = "https://api.github.com/graphql"
    headers = {"Authorization": f"Bearer {os.environ['GH_TOKEN']}"}

    response = requests.post(
        endpoint,
        json={"query": config.GH_GRAPHQL_QUERY % config.GITHUB_USERNAME},
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


def get_computer_response(project_name, query):
    """Chat with an LLM given the repo as context"""
    github_url = config.PROFILE_INFO["github"]
    repo_url = f"{github_url}/{project_name}"
    repo_docs = loader.pull_code_from_repo(repo_url)
    repo_str = loader.docs_to_str(repo_docs)
    json.dump(repo_str, open("repo_str.json", "w"))

    try:
        project_chat_chain = chat_utils.GenericChain(template=config.TEMPLATE)
        response = project_chat_chain(repo_url=repo_url, repo=repo_str, query=query)["text"]
    except openai.error.InvalidRequestError:
        response = "I'm sorry, this repo is not supported yet due to context length limitations. We are actively working on fixing this!"
    return response


def fetch_recommended_queries(project_name):
    """Fetch recommended queries for a given repository"""
    return random.sample(config.QUERIES, 3)