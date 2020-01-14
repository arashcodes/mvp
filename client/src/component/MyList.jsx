/* eslint-disable prefer-template */
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
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
    this.handleId = this.handleId.bind(this);
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

  handleId(id) {
    const { deleteMovie } = this.props;
    deleteMovie(id);
  }

  render() {
    const { movie } = this.state;
    const imageExt = movie.poster_path + '';
    const imageUrl = 'http://image.tmdb.org/t/p/w154' + imageExt;
    return (
      <div>
        <img src={imageUrl} alt="" />
        <span>{movie.title}</span>
        <span> - </span>
        <button type="button" onClick={() => this.handleClick(movie.id)}>Details</button>
        <button type="button" onClick={() => this.handleId(movie.id)}>Delete</button>
      </div>
    );
  }
}

export default MyList;
