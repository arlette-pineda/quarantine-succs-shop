import React from 'react';

function Header(props) {
  const cartItemCount = props.cartItemCount.length;
  const setView = props.setView;

  return (
    <div className="container-lg px-4 p-4 d-flex header-style pt-5 cont-block ">
      <div className="d-inline" onClick={() => props.setView('catalog', {})}>
        <img className="d-inline icon-size glow pb-2" src="/images/echeveria.png" alt="echeveria"/>
        <h2 className="d-inline glow shrink brand-font">Quarantine Succs</h2>
        <h6 className="text-center sub-header">&quot;The perfect quiet companion.&quot;</h6>
      </div>
      <div id="cart" className="d-flex pointer"
        onClick={() => setView('cart', {})}>
        <p className="m-2">
          {cartItemCount === 1
            ? cartItemCount + ' item '
            : cartItemCount + ' items '}
        </p>
        <i className="fas fa-shopping-cart fa-2x glow shrink"></i>
      </div>
    </div>
  );
}

export default Header;
