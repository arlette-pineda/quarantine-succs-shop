import React from 'react';

function ProductListItem(props) {
  return (
    <div className="card-deck col-md-4" onClick={() => props.setView('details', { product: props.product.productId })}>
      <div className="card mb-3 mt-2 pointer hover" key={props.product.productId}>
        <img src={props.product.image} className="card-img-top img-style h-50" />
        <div className="card-body">
          <h5 className="card-title">{props.product.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted"> ${(props.product.price / 100).toFixed(2)}</h6>
          <p className="card-text">{props.product.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
