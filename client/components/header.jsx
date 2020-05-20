import React from 'react';

function Header(props) {
  const cartItemCount = props.cartItemCount.length;
  const setView = props.setView;

  return (
    <div className="container-lg px-4 p-5 d-flex header-style pt-5">
      <div className="d-inline" onClick={() => props.setView('catalog', {})}>
        <img className="d-inline icon-size glow pb-2" src="/images/echeveria.png" alt="echeveria"/>
        <h2 className="d-inline glow shrink brand-font">Quarantine Succs</h2>
      </div>
      <div id="cart" className="d-inline d-flex ml-auto pointer"
        onClick={() => setView('cart', {})}>
        <p className="m-2 items">{`${cartItemCount} items`}</p>
        <i className="fas fa-shopping-cart fa-2x glow shrink"></i>
      </div>
    </div>
  );
}

export default Header;
