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
    const { id, title } = this.props.popularMovie;
    return (
      <li>
        <span>{title}</span>
        <span> - </span>
        <butoon onClick={() => this.handleClick(id)}>{id}</butoon>
      </li>
    );
  }
}

export default PopularMoviesEntry;
