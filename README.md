# Jamie Voynow Personal Portfolio and Code Conversation

Jamie Voynow Personal Portfolio and Code Conversation is a web application built with Flask and Flask-SocketIO. This project showcases the developer's resume and portfolio, as well as allows users to chat with an AI about specific repositories using OpenAI's LLM model.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

## Installation

To get started, clone this repository and install the required dependencies by running `pip install -r requirements.txt`. You'll also need to create a `.env` file to store your GitHub access token as `GH_TOKEN`.

## Usage

To run the web application locally, execute the following command:

```
$ flask run
```

This will launch a local development server at `http://127.0.0.1:5000` from where you can browse the application.

## Project Structure

- `app.py`: Main Flask application containing all the routes and socket events.
- `exclude.toml`: Configuration for `git2vec` package.
- `Procfile`: Configuration file for deployment on Heroku using Gunicorn and WebSocket workers.
- `requirements.txt`: Python package dependencies.
- `templates`: Directory containing all the Jinja2 templates for the application.
  - `404.html`: 404 error page.
  - `home.html`: Main home page template, showcasing Jamie's profile and projects.
  - `layout.html`: The base layout template used by the other templates.
  - `project.html`: The project detail page and chat interface for the selected project.
- `static`: Directory containing any static files (e.g., images) used by the project.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).