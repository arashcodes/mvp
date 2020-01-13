/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const PopularMoviesEntry = (props) => (
  <li>
    {props.popularMovie.title}
  </li>
);

export default PopularMoviesEntry;
