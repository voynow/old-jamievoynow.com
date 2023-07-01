from flask import Flask, jsonify
import services

app = Flask(__name__)

@app.route('/test')
def home():
    return {"name": "Jamie Voynow"}

@app.route('/projects')
def projects():
    return services.fetch_projects_info(app)

if __name__ == "__main__":
    app.run(debug=True)
