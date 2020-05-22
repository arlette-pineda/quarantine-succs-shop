import React from 'react';
import Slider from 'react-slick';

class Carousel extends React.Component {
  render() {

    return (
      <div className="carousel">
        <Slider
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          infinite={true}
          dots={true}
          className="slider"
        >
          <div className='d-flex justify-content-center align-items-center'>
            <img className='carousel-img' src="/images/carousel1.jpg" alt="1"/>
          </div>
          <div className='d-flex justify-content-center align-items-center'>
            <img className='carousel-img' src="/images/carousel2.jpg" alt="2" />
          </div>
          <div className='d-flex justify-content-center align-items-center'>
            <img className='carousel-img' src="/images/carousel3.jpg" alt="3" />
          </div>
          <div>
            <img className='carousel-img' src="/images/carousel4.jpg" alt="4" />
          </div>
          <div>
            <img className='carousel-img' src="/images/carousel5.jpg" alt="5" />
          </div>
          <div>
            <img className='carousel-img' src="/images/carousel6.jpg" alt="6" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
