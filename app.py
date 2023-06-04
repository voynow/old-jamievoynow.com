from flask import Flask, render_template
from flask_caching import Cache
import json
import logging
from flask_socketio import SocketIO, send, emit
from git2vec import loader
from repo_chat.chat_utils import RawChain


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
socketio = SocketIO(app, cors_allowed_origins="*")

# Configure caching
cache = Cache(app, config={'CACHE_TYPE': 'simple'})

# Configure logging
handler = logging.FileHandler('app.log')  # Create a file handler
handler.setLevel(logging.INFO)  # Set the log level to INFO
app.logger.addHandler(handler)  # Add the handler to the logger


@app.route('/')
@cache.cached(timeout=50)
def home():
    profile = fetch_profile_info()
    projects = fetch_projects_info()
    return render_template('home.html', profile=profile, projects=projects)


@app.route('/projects/<project_name>')
@cache.cached(timeout=50)
def project_detail(project_name):
    app.logger.info(f'Project {project_name} page accessed')
    project = fetch_project(project_name)
    return render_template('project.html', project=project)


@socketio.on('message')
def handle_message(msg):
    send(f"You: {msg}", broadcast=True)
    repo_name = "https://github.com/voynow/turbo-docs"
    raw_repo = loader.load(repo_name, return_str=True)
    chain = RawChain(raw_repo)
    response = chain.chat(msg)['text']
    send(f"Computer: {response}", broadcast=True)

#     self.chain = self.create_chain(**getattr(templates, name))
#   File "C:\Users\voyno\Desktop\code\repos\personal-website\venv\lib\site-packages\repo_chat\chain_manager.py", line 31, in create_chain
#     llm = ChatOpenAI(
#   File "pydantic\main.py", line 341, in pydantic.main.BaseModel.__init__
# pydantic.error_wrappers.ValidationError: 1 validation error for ChatOpenAI
# __root__
#   Did not find openai_api_key, please add an environment variable `OPENAI_API_KEY` which contains it, or pass  `openai_api_key` as a named parameter. (type=value_error)


@app.errorhandler(404)
def page_not_found(e):
    app.logger.error('Page not found')
    return render_template('404.html'), 404
