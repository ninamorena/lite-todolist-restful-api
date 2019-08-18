/**
 * Creating an express server to listen to an open port
 * or port 3000 for changes.  If connected correctly,
 * a message will appear in the terminal.  In order to test
 * run `npm run start`.
 */

const express = require('express');
app = express(),
port = process.env.PORT || 3000;
mongoose = require('mongoose');
// Load API model
Task = require('./api/models/todoListModel');
bodyParser = require('body-parser');

// Connect to mongoose instance
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', { useNewUrlParser: true});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Let's import our routes and register them
const routes = require('./api/routes/todoListRoutes');
routes(app);

// Interactive error messaging
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' is a route we do not have. Try again'})
});
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);