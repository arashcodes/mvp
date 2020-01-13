const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Controller = require('./controller.js');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.post('/addMovie', (req, res) => {
  Controller.addMovie(req, res);
});

app.listen(port, console.log(`Listening on port ${port}`));
