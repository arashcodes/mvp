/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PopularMoviesEntry from './PopularMoviesEntry.jsx';

const PopularMovies = (props) => (
  <ul> Popular Movies:
    {props.popularMovies.map((item, idx) => (
      <PopularMoviesEntry popularMovie={item} key={idx} />
    ))}
  </ul>
);

export default PopularMovies;
