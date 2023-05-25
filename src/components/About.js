import React from 'react'
import blogData from '../data/blog';

function About(blogData) {
  return (
    <aside>
      <img src={blogData.image} alt='blog logo'>{blogData.image}</img>
      <p>{blogData.about}</p>
    </aside>
  );
}

export default About