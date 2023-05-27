# My Personal Developer Site

A personal website, all about my projects and journey into the world of software developement

## Features

- Personal info about myself
- High level view of my portfolio
- Project details
- Ask Jamie a question chatGPT style (Under development)

## Technologies

- Flask
- Jinja2
- Gunicorn
- Flask-Caching
- CSS (Bootstrap)

## File Structure
```
app.py                 - Main application logic.
Procfile               - Configuration for gunicorn.
requirements.txt       - Required packages.

/templates              - Contains Jinja2 templates.
    404.html           - 404 error page template.
    home.html          - Homepage template showing profile and project listings.
    project.html       - Template to display detailed project information.
    layout.html        - Base layout template used by other templates.

/static                 - Contains static files like images, and styles.min.css file.

app.log                 - Log file created when running the application.
```

## License

[MIT License](https://opensource.org/licenses/MIT)