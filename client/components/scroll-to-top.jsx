import React from 'react';

function ScrollToTop(props) {

  return (
    <div className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <button>^ to top</button>
    </div>
  );
}

export default ScrollToTop;
