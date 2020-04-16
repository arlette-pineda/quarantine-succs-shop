import React from 'react';

function CartSummaryItem(props) {
  return (
    <div className="card">
      <div className="row">
        <div className="">
          <img src="" alt=""/>
          Card Image Here
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">Item Name</h3>
            <p className="card-text">Price Here</p>
            <p className="card-text">Short Description Here. Short Description Here. Short Description Here. Short Description Here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSummaryItem;
