import React from 'react';

function ScrollToTop(props) {

  return (
    <div className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <i className="fas fa-angle-double-up 3x"></i>
    </div>
  );
}

export default ScrollToTop;
