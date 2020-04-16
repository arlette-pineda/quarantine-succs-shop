import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {

  if (props.cart.length === 0) {
    return (
      <div>
        <p>You haven&#39;t added anything yet!</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>My Cart</h2>
      {
        props.cart.map(cartItem => {
          return (
            <CartSummaryItem
              key={cartItem.cartItemId}
              image={cartItem.image}
              itemName={cartItem.name}
              price={cartItem.price}
              shortDesc={cartItem.shortDescription}
            />
          );
        }
        )
      }
      <h3>Item Total $ x</h3>
    </div>
  );
}

export default CartSummary;
