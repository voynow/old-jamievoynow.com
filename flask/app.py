from flask import Flask, jsonify

import services

app = Flask(__name__)

@app.route('/portfolio')
def portfolio():
    return services.fetch_portfolio(app)

@app.route('/portfolio/<string:project_name>')
def get_project_details(project_name):
    print("*"* 100, project_name)
    return jsonify({"name": "test name", "description": "test description"})

if __name__ == "__main__":
    app.run(debug=True)
