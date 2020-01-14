/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';
import PopularMovies from './PopularMovies.jsx';
import MyList from './MyList.jsx';
import key from '../../../keys.js';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popularMovies: [],
      myList: [],
    };
    this.getPopularMovies = this.getPopularMovies.bind(this);
    this.getMyList = this.getMyList.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.getPopularMovies();
    this.getMyList();
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

  getMyList() {
    axios.get('/getMovies')
      .then((res) => {
        this.setState({ myList: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteMovie(id) {
    // this.getMyList();
    axios.post('/delete', { movieId: id })
      .then((res) => {
        console.log(res);
      })
      .then(() => {
        this.getMyList();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { popularMovies, myList } = this.state;
    const { setMovie } = this.props;
    return (
      <div>
        <PopularMovies popularMovies={popularMovies} setMovie={setMovie} />
        <h1>My list:</h1>
        <ul>
          {myList.map((item, idx) => (
            <MyList movie={item} key={idx} setMovie={setMovie} deleteMovie={this.deleteMovie} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
