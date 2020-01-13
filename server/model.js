const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mvp', { useNewUrlParser: true, useUnifiedTopology: true });

const { Schema } = mongoose;

const listSchema = new Schema({
  movieId: Number,
});

const List = mongoose.model('List', listSchema);

module.exports = {
  addMovie: (callback, data) => {
    const query = { movieId: data.id };
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
};
