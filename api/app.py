
from flask import Flask
from flask_cors import CORS
from flask_socketio import SocketIO, emit

import services

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

@app.route('/portfolio')
def portfolio():
    return services.fetch_portfolio()

@app.route('/portfolio/<string:project_name>')
def get_project_details(project_name):
    portfolio = {project['name']: project for project in services.fetch_portfolio()}
    return portfolio.get(project_name)

@socketio.on('send_message')
def handle_message(data):
    response = services.chat(data['message'], data['project'])
    emit('receive_message', response, broadcast=True)

if __name__ == "__main__":
    socketio.run(app, debug=True)
