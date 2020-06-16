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
          <div className='d-flex text-white justify-content-center'>
            <img className='carousel-img' src="/images/carousel1.jpg" alt="1" />
            <div className="slide__caption">
              <h3>Succulent Companionship</h3>
              <p>&quot;Succulents, with their striking forms, unusual colors, and easy-care reputation, are fantastic indoor plants ready to keep you company wherever you may be.&quot;</p>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <img className='carousel-img ' src="/images/carousel2.jpg" alt="2"/>
            <div className="slide__caption">
              <h3>Menthal Health</h3>
              <p>&quot;Studies have shown that interaction with indoor plants may reduce psychological and physiological stress – in fact they can have a soothing effect.&quot;</p>
            </div>
          </div>
          <div className='d-flex text-white justify-content-center'>
            <img className='carousel-img' src="/images/carousel3.jpg" alt="3" />
            <div className="slide__caption">
              <h3>Add Some Green</h3>
              <p>&quot;Add a pop of natural green to liven up any room.&quot;</p>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <img className='carousel-img' src="/images/carousel4.jpg" alt="4" />
            <div className="slide__caption">
              <h3>Let Them Be Your Cheerleaders</h3>
              <p>&quot;Whether painting, reading, or gaming let the little ones quietly cheer you on.&quot;</p>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <img className='carousel-img' src="/images/carousel5.jpg" alt="5" />
            <div className="slide__caption">
              <h3>Quarantine Succs</h3>
              <p>&quot;Let it suck a little less.&quot;</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
