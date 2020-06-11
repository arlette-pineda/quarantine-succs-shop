import React from 'react';

function AddModal() {
  return (
    <div className="modal-wrapper">
      <div className="modal-header">
        <span className="close-modal-btn">x</span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h5>Item has been added to cart!</h5>
        </div>
        <div className="modal-footer"></div>
        <button className="btn-continue">Continue Shopping</button>
        <button className="btn-checkout">Go to Cart</button>
      </div>
    </div>
  );
}

export default AddModal;
