from flask import Flask, render_template
from flask_caching import Cache
import json
import logging


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
    return json.load(open('static/projects.json', 'r'))

def fetch_project(project_name):
    for project in fetch_projects_info():
        if project["title"] == project_name:
            return project
    return None


app = Flask(__name__)

# Configure caching
cache = Cache(app, config={'CACHE_TYPE': 'simple'})

# Configure logging
handler = logging.FileHandler('app.log')  # Create a file handler
handler.setLevel(logging.INFO)  # Set the log level to INFO
app.logger.addHandler(handler)  # Add the handler to the logger

@app.route('/')
@cache.cached(timeout=50)
def home():
    app.logger.info('Homepage accessed')
    profile = fetch_profile_info()
    projects = fetch_projects_info()
    return render_template('home.html', profile=profile, projects=projects)

@app.route('/projects/<project_name>')
@cache.cached(timeout=50)
def project_detail(project_name):
    app.logger.info(f'Project {project_name} page accessed')
    project = fetch_project(project_name)
    return render_template('project.html', project=project)

@app.errorhandler(404)
def page_not_found(e):
    app.logger.error('Page not found')
    return render_template('404.html'), 404
