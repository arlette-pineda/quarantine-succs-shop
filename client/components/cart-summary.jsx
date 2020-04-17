import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  const initialValue = 0;
  const total = props.cart.reduce((accum, currV) => {
    return accum + currV.price;
  }, initialValue);
  const cartTotal = (total / 100).toFixed(2);

  if (props.cart.length === 0) {
    return (
      <div>
        <p>You haven&#39;t added anything yet!</p>
      </div>
    );
  }

  return (
    <div className="container">
      <small className="row text-muted ml-2 mb-2 mt-2 pointer"
        onClick={() => props.setView('catalog', {})}>
        &lt;Back to catalog
      </small>
      <h2 className="mt-2">My Cart</h2>
      {
        props.cart.map(cartItem => {
          return (
            <CartSummaryItem
              key={cartItem.cartItemId}
              itemName={cartItem.name}
              price={cartItem.price}
              shortDesc={cartItem.shortDescription}
              image={cartItem.image}
            />
          );
        }
        )
      }
      <div className="row mt-5 ml-2 mr-2 d-flex justify-content-between">
        <h3 className="m-4">Item Total ${cartTotal}</h3>
        <button className="btn btn-primary m-3"
          onClick={() => props.setView('checkout', {})}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartSummary;
