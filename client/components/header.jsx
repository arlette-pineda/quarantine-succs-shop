import React from 'react';

function Header(props) {
  const cartItemCount = props.cartItemCount.length;
  const setView = props.setView;

  return (
    <div className="row p-2 header-style ">
      <div className="col-md-9  d-flex">
        <div className="ml-5 pl-5">
          <h2 className="">$ Wicked Sales</h2>
        </div>
      </div>
      <div className="col-md-3 d-flex pointer"
        onClick={() => setView('cart', {})}>
        <p className="m-2">{`${cartItemCount} items`}</p>
        <i className="fas fa-shopping-cart fa-2x"></i>
      </div>
    </div>
  );
}

export default Header;
