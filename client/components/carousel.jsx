import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
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

  prevSlide() {
    const lastIndex = this.state.images.length - 1;
    const resetIndex = this.state.currentImageIndex === 0;
    const index = resetIndex ? lastIndex : this.state.currentImageIndex - 1;
    this.setState({
      currentImageIndex: index
    });
  }

  render() {
    return (
      <div className="carousel"></div>
    );
  }
}

export default Carousel;
