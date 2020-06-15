import React from 'react';
import Slider from 'react-slick';

class Carousel extends React.Component {
  render() {

    return (
      <div className="carousel">
        <Slider
          autoplay={true}
          autoplaySpeed={3500}
          slidesToShow={1}
          slidesToScroll={1}
          infinite={true}
          fade={true}
          speed={2000}
          dots={true}
          // arrows={true}
          // adaptiveHeight={true}
          className="slider"
        >
          <div className='d-flex text-white'>
            <img className='carousel-img' src="/images/carousel0.jpg" alt="0" />
            <div className="slide__caption">
              <h3>Succulent Companionship</h3>
              <p>&quot;Succulents, with their striking forms, unusual colors, and easy-care reputation, are fantastic indoor plants ready to keep you company wherever you may be.&quot;</p>
            </div>
          </div>
          <div className='d-flex '>
            <img className='carousel-img' src="/images/carousel1.jpg" alt="1"/>
            <div className="slide__caption">
              &quot;Caption 1 here. Caption 1 here.Caption 1 here. Caption 1 here.&quot;
            </div>
          </div>
          <div className='d-flex '>
            <img className='carousel-img' src="/images/carousel2.jpg" alt="2" />
            <div className="slide__caption">
              &quot;Caption 2 here. Caption 2 here.Caption 2 here. Caption 2 here.&quot;
            </div>
          </div>
          <div className='d-flex '>
            <img className='carousel-img' src="/images/carousel3.jpg" alt="3" />
            <div className="slide__caption">
              &quot;Caption 3 here. Caption 3 here.Caption 3 here. Caption 3 here.&quot;
            </div>
          </div>
          <div>
            <img className='carousel-img' src="/images/carousel4.jpg" alt="4" />
            <div className="slide__caption">
              &quot;Caption 4 here. Caption 4 here.Caption 4 here. Caption 4 here.&quot;
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
