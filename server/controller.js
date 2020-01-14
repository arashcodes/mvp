const Model = require('./model.js');

module.exports = {
  addMovie: (req, res) => {
    Model.addMovie((err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    }, req.body);
  },
  getMovies: (req, res) => {
    Model.getMovies((err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },
  deleteMovie: (req, res) => {
    Model.deleteMovie((err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    }, req.body);
  },
};
