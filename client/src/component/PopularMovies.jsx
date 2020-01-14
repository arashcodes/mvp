/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PopularMoviesEntry from './PopularMoviesEntry.jsx';

const PopularMovies = (props) => (
  <ul>
    <h1>Popular and Trending:</h1>
    {props.popularMovies.map((item, idx) => (
      <PopularMoviesEntry popularMovie={item} key={idx} setMovie={props.setMovie} />
    ))}
  </ul>
);

export default PopularMovies;
