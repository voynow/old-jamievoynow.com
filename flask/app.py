from flask import Flask
import services

app = Flask(__name__)

@app.route('/portfolio')
def portfolio():
    return services.fetch_portfolio(app)

@app.route('/portfolio/<project_id>')
def get_project_details(project_id):
    print(project_id)
    return {}



if __name__ == "__main__":
    app.run(debug=True)
