import React from 'react';

function CartSummaryItem(props) {
  return (
    <div className="card p-3 m-2 box mb-4">
      <div className="row">
        <div className="col-md-4">
          <img className="img-details" src={props.image} onClick={() => props.setView('details', { product: props.productId })} />
        </div>
        <div className="col-md-8 ">
          <div className="card-body">
            <h3 className="card-title brand-font">{props.itemName}</h3>
            <p className="card-text text-muted" >${(props.price / 100).toFixed(2)}</p>
            <p className="card-subtitle">{props.shortDesc}</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button type="button" className="btn-remove">Remove</button>
      </div>
    </div>
  );
}

export default CartSummaryItem;
