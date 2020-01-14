/* eslint-disable prefer-template */
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class PopularMoviesEntry extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.props.setMovie(id);
  }

  render() {
    const { id, title, poster_path } = this.props.popularMovie;
    const imageExt = poster_path + '';
    const imageUrl = 'http://image.tmdb.org/t/p/w154' + imageExt;
    return (
      <li>
        <span>{title}</span>
        <span> - </span>
        <button type="button" onClick={() => this.handleClick(id)}>{id}</button>
        <img src={imageUrl} alt="" />
      </li>
    );
  }
}

export default PopularMoviesEntry;
