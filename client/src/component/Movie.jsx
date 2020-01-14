/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';
import key from '../../../keys.js';
import Suggested from './Suggested.jsx';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      recommendations: [],
    };

    this.getMovie = this.getMovie.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.getRecommendations = this.getRecommendations.bind(this);
  }

  componentDidMount() {
    this.getMovie();
    this.getRecommendations();
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

  getRecommendations() {
    const { movie } = this.props;
    const id = movie;
    axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${key.apiKey}&language=en-US&page=1`)
      .then((res) => {
        console.log(res.data.results);
        this.setState({ recommendations: res.data.results });
      })
      .catch((err) => console.log(err));
  }

  handleAdd(id) {
    const { addToList } = this.props;
    addToList(id);
  }

  render() {
    const { movie, recommendations } = this.state;
    return (
      <div>
        {movie.title}
        <button type="button" onClick={() => this.handleAdd(movie.id)}>Add to my list</button>
        <br />
        <br />
        <br />
        if you like {movie.title}
        :
        <ul>
          {recommendations.map((item, i) => (
            <Suggested suggested={item} key={i} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Movie;
