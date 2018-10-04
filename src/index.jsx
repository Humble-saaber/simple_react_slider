import ReactDOM from 'react-dom';
import React from 'react';
import Carousel from './Carousel';

const images = ['/images/first.jpeg', '/images/second.jpeg', '/images/third.jpeg']; 

ReactDOM.render(
  <Carousel images={images} />,
  document.getElementById('container'),
);