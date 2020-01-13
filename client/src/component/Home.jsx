/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';
import PopularMovies from './PopularMovies.jsx';
import key from '../../../keys.js';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popularMovies: [],
    };
    this.getPopularMovies = this.getPopularMovies.bind(this);
  }

  componentDidMount() {
    this.getPopularMovies();
  }

  getPopularMovies() {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key.apiKey}&language=en-US&page=1`)
      .then((res) => {
        const movies = res.data.results;
        this.setState({
          popularMovies: movies,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { popularMovies } = this.state;
    const { setMovie } = this.props;
    return (
      <div>
        Home page
        <PopularMovies popularMovies={popularMovies} setMovie={setMovie} />
      </div>
    );
  }
}

export default Home;
