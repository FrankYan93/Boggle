Boggle Project
==============

Running
-------

To run this project, you'll need Node.js installed. The application has been tested with v4.x.

To install the application dependencies, run:

    npm install

To start the application, run:

    npm start

A web server will start on port 3333. You can change the port by passing a `PORT` environment variable, for example:

    PORT=8080 npm start

I think it can perfectly work now.  
After it started, go to localhost at port 3333 to play.  
Downloaded a "dictionary.txt" and used a python script("makedic.py") to transform it into a js set for validation.  
Used session to keep Highest Score.
