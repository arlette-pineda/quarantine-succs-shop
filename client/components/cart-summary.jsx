import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  return (
    <div className="container">
      <h2>My Cart</h2>
      {props.cart.map(cartItem =>
        return (
          <CartSummaryItem
            key={cartItem.cartItemId}
            image={cartItem.image}
            itemName={cartItem.name}
            price={cartItem.price}
            shortDesc={cartItem.shortDescription}
          />
        ))}
    </div>
  );
}
