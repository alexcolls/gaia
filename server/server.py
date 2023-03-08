# Python 3 server example
from http.server import BaseHTTPRequestHandler, HTTPServer
from src.openai_api import davinci
import time
from flask import Flaskapp = Flask(__name__)


@app.route(‘/’, methods=[‘GET’])
def root():
    return “Hello world”


if __name__ ==”__main__”:
    app.run()
