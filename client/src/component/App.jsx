/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import React from 'react';
import { Search, Home, Movie } from './Imports.jsx';
import key from '../../../keys.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'home',
      movie: '',
      myList: [],
    };
    this.hanldeSearch = this.hanldeSearch.bind(this);
    this.renderView = this.renderView.bind(this);
    this.changeView = this.changeView.bind(this);
    this.setMovie = this.setMovie.bind(this);
  }

  setMovie(id) {
    this.setState({ movie: id });
    this.changeView('movie');
  }

  hanldeSearch(movie) {
    const inputStr = movie.replace(/ /gi, '%20');
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key.apiKey}&language=en-US&query=${inputStr}&page=1&include_adult=false`)
      .then((res) => res.json())
      .then((res) => res.results[0].id)
      .then((res) => fetch(`https://api.themoviedb.org/3/movie/${res}?api_key=${key.apiKey}&language=en-US`))
      .then((res) => res.json())
      // .then((res) => {
        // console.log(res);
        // Full movie object
      // });
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  renderView() {
    const { view } = this.state;
    if (view === 'home') {
      return <Home setMovie={this.setMovie} />;
    }
    return <Movie />;
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
