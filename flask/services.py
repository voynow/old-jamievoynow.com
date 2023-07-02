from flask import url_for
import requests
import os
import config
from dotenv import load_dotenv
load_dotenv()

def fetch_portfolio(app):
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
    projects = [
        {
            "name": node["node"]["name"],
            "description": node["node"]["description"],
            "url": node["node"]["url"],
            "imageUrl": url_for('static', filename=f'assets/{node["node"]["name"]}.png'),
        }
        for node in edges
    ]
    return projects
