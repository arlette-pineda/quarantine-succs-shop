import React from 'react';

function ProductListItem(props) {
  return (
    // <div className="col-sm">
    <div className="card col-sm-2" key={props.prodProp.id}>
      <img src={props.prodProp.image} className="card-img-tops contain" />
      <div className="card-body">
        <h5 className="card-title">{props.prodProp.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted"> ${(props.prodProp.price / 100).toFixed(2)}</h6>
        <p className="card-text">{props.prodProp.shortDescription}</p>
      </div>
    </div>
    // </div>
  );
}

export default ProductListItem;
