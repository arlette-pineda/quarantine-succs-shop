import React from 'react';

function Header(props) {
  const cartItemCount = props.cartItemCount.length;
  const setView = props.setView;

  return (
    <div className="container-lg px-4 d-flex header-style pt-4 mb-5">
      <div className="d-inline">
        <h2 className="glow"
          onClick={() => props.setView('catalog', {})}>
            $ Wicked Sales</h2>
      </div>
      <div className="d-inline d-flex ml-auto pointer"
        onClick={() => setView('cart', {})}>
        <p className="m-2">{`${cartItemCount} items`}</p>
        <i className="fas fa-shopping-cart fa-2x glow"></i>
      </div>
    </div>
  );
}

export default Header;
