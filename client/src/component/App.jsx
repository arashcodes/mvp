/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import { Search, Home, Movie } from './Imports.jsx';
import key from '../../../keys.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'home',
      movie: '',
      // myList: [],
    };
    this.hanldeSearch = this.hanldeSearch.bind(this);
    this.renderView = this.renderView.bind(this);
    this.changeView = this.changeView.bind(this);
    this.setMovie = this.setMovie.bind(this);
    this.addToList = this.addToList.bind(this);
  }

  setMovie(id) {
    this.setState({ movie: id });
    this.changeView('movie');
  }

  addToList(id) {
    const movie = { movieId: id };
    axios.post('/addMovie', movie)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  hanldeSearch(movie) {
    const inputStr = movie.replace(/ /gi, '%20');
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key.apiKey}&language=en-US&query=${inputStr}&page=1&include_adult=false`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          movie: res.results[0].id,
        });
        this.changeView('movie');
      });
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  renderView() {
    const { view, movie } = this.state;
    if (view === 'home') {
      return <Home setMovie={this.setMovie} />;
    }
    return <Movie movie={movie} addToList={this.addToList} />;
  }

  render() {
    return (
      <div>
        <button type="button" onClick={() => this.changeView('home')}>Home</button>
        <Search hanldeSearch={this.hanldeSearch} />
        {this.renderView()}
      </div>
    );
  }
}

export default App;
