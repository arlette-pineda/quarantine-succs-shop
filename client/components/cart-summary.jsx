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
      <small className="row text-muted ml-2 mb-2 mt-4 pointer" onClick={() => this.props.setView('catalog', {})}> &lt;Back to catalog </small>
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
      <h3>Item Total $ x</h3>
    </div>
  );
}

export default CartSummary;
