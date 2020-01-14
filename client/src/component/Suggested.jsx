/* eslint-disable react/prop-types */
import React from 'react';

const Suggested = (props) => {
  const { suggested } = props;
  // const { id, title, poster_path } = this.props.popularMovie;
  const imageExt = suggested.poster_path + '';
  const imageUrl = 'http://image.tmdb.org/t/p/w154' + imageExt;
  // console.log(suggested);
  return (
    <div>
      <img src={imageUrl} alt="" />
      {suggested.title}
    </div>
  );
};

export default Suggested;
