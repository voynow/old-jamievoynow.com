import json
import logging

import src.config as config
import src.services as services

from flask import Flask, render_template
from flask_caching import Cache
from flask_socketio import SocketIO, send


# Set up Flask app and socketio
app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

# Configure caching
cache = Cache(app, config={"CACHE_TYPE": "simple"})

# Configure logging
handler = logging.FileHandler("app.log")
handler.setLevel(logging.INFO)
app.logger.addHandler(handler)

# Fetch projects from GitHub
PROJECTS = services.fetch_projects_info()


@app.route("/")
@cache.cached(timeout=50)
def home():
    project_objs = [value for _, value in PROJECTS.items()]
    return render_template(
        "home.html", profile=config.PROFILE_INFO, projects=project_objs
    )


@app.route("/projects/<project_name>")
@cache.cached(timeout=50)
def project_detail(project_name):
    app.logger.info(f"Project {project_name} page accessed")
    project = PROJECTS[project_name]
    return render_template("project.html", project=project)


@socketio.on("message")
def handle_message(data):
    response = services.get_computer_response(data['project'], data['msg'])
    send(response, broadcast=True)


@app.route("/recommended_queries/<project_name>")
def recommended_queries(project_name):
    """API endpoint for fetching recommended queries for a given repository"""
    queries = services.fetch_recommended_queries(project_name)
    return json.dumps(queries)
