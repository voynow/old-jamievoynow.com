# GitHub Portfolio WebApp

A web application to display a user's GitHub portfolio with an interactive chat for Q&A about the user's repositories.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- Displays a GitHub portfolio with pinned repositories
- Interactive chat system for users to ask questions about the repository or code
- Generates recommended questions for the user to ask
- Websocket support for real-time chat

## Requirements

- [Python 3.8](https://www.python.org/downloads/release/python-380/)
- [pip](https://pypi.org/project/pip/)

## Installation

1. Clone the GitHub repository:
   ```
   git clone https://github.com/voynow/jamievoynow.com.git
   ```
2. Change into the project folder and install the required packages:
   ```
   cd jamievoynow.com
   pip install -r requirements.txt
   ```
3. Set up required environment variables:
   - `GH_TOKEN`: your GitHub personal access token (used for GraphQL queries).
   - `OPENAI_API_KEY`: your OpenAI API key (used for generating chat responses).

## Usage

To run the application, execute the following command in the project folder:

```
python src/app.py
```

The application will be accessible at http://localhost:5000/

## Contributing

Contributions are welcome! If you have any ideas or improvements, feel free to create a pull request.