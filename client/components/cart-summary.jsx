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
      <div className="mx-3 py-5 cart-height">
        <small className="row back ml-2 mb-2 mt-2 pointer"
          onClick={() => props.setView('catalog', {})}>
          &lt;Back to catalog
        </small>
        <p className="text-center">You haven&#39;t added anything yet!</p>
      </div>
    );
  }

  return (
    <div className="container">
      <small className="row ml-1 mb-2 mt-2 back"
        onClick={() => props.setView('catalog', {})}>
        &lt;Back to catalog
      </small>
      <h1 className="mt-2 ml-3">My Cart</h1>
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
      <div className="row ml-2 mr-2 d-flex justify-content-between mb-4">
        <h3 className="ml-4 align-self-center">Item Total ${cartTotal}</h3>
        <button className="btn btn-primary m-4"
          onClick={() => props.setView('checkout', {})}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartSummary;
