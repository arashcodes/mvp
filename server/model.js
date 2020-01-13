const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mvp', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const { Schema } = mongoose;

const listSchema = new Schema({
  movieId: Number,
});

const List = mongoose.model('List', listSchema);

module.exports = {
  addMovie: (callback, data) => {
    const query = data;
    const update = { expire: new Date() };
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };

    List.findOneAndUpdate(query, update, options, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
  getMovies: (callback) => {
    List.find({}, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(err, result);
      }
    });
  },
};
