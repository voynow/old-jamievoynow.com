from flask import Flask, render_template

app = Flask(__name__, static_folder="build", static_url_path='/')

@app.route('/')
def index():
    return app.send_static_file('index.html')

if __name__ == "__main__":
    app.run(use_reloader=True, port=5000, threaded=True)
