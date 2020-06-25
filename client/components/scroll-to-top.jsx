import React from 'react';

function ScrollToTop(props) {

  return (
    <div className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <i className="fa fa-angle-up" />
    </div>
  );
}

export default ScrollToTop;
