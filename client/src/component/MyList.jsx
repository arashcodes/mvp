/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';
import key from '../../../keys.js';

class MyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
    };
    this.getMovieDetails = this.getMovieDetails.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getMovieDetails();
  }

  getMovieDetails() {
    const { movie } = this.props;
    const id = movie.movieId;
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key.apiKey}&language=en-US
    `)
      .then((res) => {
        this.setState({ movie: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleClick(id) {
    const { setMovie } = this.props;
    setMovie(id);
  }

  render() {
    const { movie } = this.state;
    return (
      <li>
        <span>{movie.title}</span>
        <span> - </span>
        <button type="button" onClick={() => this.handleClick(movie.id)}>{movie.id}</button>
      </li>
    );
  }
}

export default MyList;
