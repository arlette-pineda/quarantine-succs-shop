import React from 'react';

function AddModal(props) {
  const setView = props.setView;

  return (
    <div className="modal-wrapper"
      style={{
        opacity: props.addModal ? '1' : '0'
      }}
    >
      <div className="modal-header">
        <span className="close-modal-btn" onClick={() => props.closeModal()}>x</span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h5>Item has been added to cart!</h5>
        </div>
        <div className="modal-footer row">
          <button onClick={() => setView('catalog', {})} className="btn-continue col">Continue Shopping</button>
          <button onClick={() => setView('cart', {})} className="btn-checkout col">Go to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default AddModal;
