/* eslint-disable react/prop-types */
import React from 'react';

const Suggested = (props) => {
  const { suggested } = props;
  return (
    <li>
      {suggested.title}
    </li>
  );
};

export default Suggested;
