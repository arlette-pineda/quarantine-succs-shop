import React from 'react';
import Slider from 'react-slick';

class Carousel extends React.Component {
  render() {

    return (
      <div className="carousel">
        <Slider
          autoplay={true}
          autoplaySpeed={4000}
          slidesToShow={1}
          slidesToScroll={1}
          infinite={true}
          fade={true}
          speed={4000}
          dots={true}
          className="slider"
        >
          <div className='d-flex text-white justify-content-center'>
            <img className='carousel-img' src="/images/carousel1.jpg" alt="Several succulent plants in glass and ceramic pots near window" />
            <div className="slide__caption black-shadow">
              <h3>Succulent Companionship</h3>
              <p>&quot;Succulents, with their striking forms, unusual colors, and easy-care reputation, are fantastic indoor plants ready to keep you company wherever you may be.&quot;</p>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <img className='carousel-img ' src="/images/carousel2.jpg" alt="Four small succulents in white pots near window"/>
            <div className="slide__caption white-shadow">
              <h3>Mental Health</h3>
              <p>&quot;Studies have shown that interaction with indoor plants may reduce psychological and physiological stress – in fact they can have a soothing effect.&quot;</p>
            </div>
          </div>
          <div className='d-flex text-white justify-content-center'>
            <img className='carousel-img' src="/images/carousel3.jpg" alt="Haworthia plant leaves" />
            <div className="slide__caption black-shadow">
              <h3>Add Some Green</h3>
              <p>&quot;Add a pop of natural green to liven up any room.&quot;</p>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <img className='carousel-img' src="/images/carousel4.jpg" alt="Echeveria succulent next to paper and paintbrushes" />
            <div className="slide__caption white-shadow">
              <h3>Let Them Be Your Cheerleaders</h3>
              <p>&quot;Whether painting, reading, or gaming let the little ones quietly cheer you on.&quot;</p>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <img className='carousel-img' src="/images/carousel5.jpg" alt="Succulent arrangement next to empty coffe cup, paper, and pen" />
            <div className="slide__caption white-shadow">
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
