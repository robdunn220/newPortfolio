from flask import Flask, render_template, redirect, request, session, flash, jsonify
from time import time
import datetime
from datetime import timedelta
import os

tmp_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'static')
app = Flask('portfolio', static_url_path='')

@app.route('/')
def route_index():
    # Loads the index site
    return app.send_static_file('index.html');

@app.route('/api/hello')
def hello():
    results = 'Hello'
    print(results)
    return results

app.run(debug=True)
