import React from 'react';

function Header(props) {
  const cartItemCount = props.cartItemCount.length;
  const setView = props.setView;

  return (
    <div className="row p-2 header-style d-flex">
      <div className="col-9">
        <div>
          <p className="ml-5 pl-5">$ Wicked Sales</p>
        </div>
      </div>
      <div className="col-3 d-flex pointer"
        onClick={() => setView('cart', {})}>
        <p className="m-2">{`${cartItemCount} items`}</p>
        <i className="fas fa-shopping-cart fa-2x"></i>
      </div>
    </div>
  );
}

export default Header;
