import React from 'react';

function CartSummaryItem(props) {
  return (
    <div className="card">
      <div className="row">
          <img className="img-details" src={props.image} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{props.itemName}</h3>
            <p className="card-text text-muted" >${(props.price / 100).toFixed(2)}</p>
            <p className="card-text">{props.shortDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSummaryItem;
