import React from 'react';

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImageIndex: 0,
      images: [
        '/images/carousel1.jpg',
        '/images/carousel2.jpg',
        '/images/carousel3.jpg',
        '/images/carousel4.jpg',
        '/images/carousel5.jpg',
        '/images/carousel6.jpg'
      ]
    };
  }
}

export default Carousel;
