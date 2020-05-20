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
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  prevSlide() {
    const lastIndex = this.state.images.length - 1;
    const resetIndex = this.state.currentImageIndex === 0;
    const index = resetIndex ? lastIndex : this.state.currentImageIndex - 1;
    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide() {
    const lastIndex = this.state.images.length - 1;
    const resetIndex = this.state.currentImageIndex === lastIndex;
    const index = resetIndex ? 0 : this.state.currentImageIndex + 1;
    this.setState({
      currentImageIndex: index
    });
  }

  render() {
    const index = this.state.currentImageIndex;
    let firstSixSlides = this.state.images.slice(index, index + 6);
    if (firstSixSlides.length < 6) {
      firstSixSlides = firstSixSlides.concat(this.state.images.slice(0, 6 - firstSixSlides.length));
    }
    return (
      <div className="carousel">
        <i className="fas fa-chevron-left" onClick={this.prevSlide}></i>
        {firstSixSlides.map((image, index) =>
          <img className="carousel-img" key={index} src={image} alt=""/>
        )}
        <i className="fas fa-chevron-right" onClick={this.nextSlide}></i>
      </div>
    );
  }
}

export default Carousel;
