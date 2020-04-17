import React from 'react';

function Header(props) {
  const cartItemCount = props.cartItemCount.length;
  const setView = props.setView;

  return (
    <div className="container">
      <div className="header-style row p-2 ">
        <div className="col-9">
          <p>$ Wicked Sales</p>
        </div>
        <div className="col d-flex alighn-items-center justify-content-center pointer"
          onClick={() => setView('cart', {})}>
          <p className="m-2">{`${cartItemCount} items`}</p>
          <i className="fas fa-shopping-cart fa-2x"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
