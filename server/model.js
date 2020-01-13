const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mvp', { useNewUrlParser: true, useUnifiedTopology: true });

const { Schema } = mongoose;

const listSchema = new Schema({
  movieId: Number,
});

const List = mongoose.model('List', listSchema);

module.exports = {
  addMovie: (callback, data) => {
    // List.update({ movieId: data.id }, { upsert: true }, (err, result) => {
    //   if (err) {
    //     callback(err);
    //   } else {
    //     callback(null, result);
    //   }
    // });
    List.create({ movieId: data.id }, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
};
