from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/test')
def home():
    return {"name": "Jamie Voynow"}

@app.route('/projects')
def projects():
    return jsonify([
        {
            "title": "Project 1",
            "description": "This is a short description for Project 1."
        },
        {
            "title": "Project 2",
            "description": "This is a short description for Project 2."
        },
    ])

if __name__ == "__main__":
    app.run(debug=True)
