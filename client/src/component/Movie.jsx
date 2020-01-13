/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';
import key from '../../../keys.js';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
    };

    this.getMovie = this.getMovie.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  getMovie() {
    const { movie } = this.props;
    const id = movie;
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key.apiKey}&language=en-US`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ movie: res });
      });
  }

  handleAdd(id) {
    const { addToList } = this.props;
    addToList(id);
  }

  render() {
    const { movie } = this.state;
    return (
      <div>
        {movie.title}
        <button type="button" onClick={() => this.handleAdd(movie.id)}>Add to my list</button>
      </div>
    );
  }
}

export default Movie;
