import React from 'react';

function AddModal(props) {
  const setView = props.setView;

  return (
    <div className={`${props.modalShowing ? 'modal' : 'd-none'}`}
      style={{
        opacity: props.modalShowing ? '1' : '0'
      }}>
      <div className="modal-wrapper"
        style={{
          transform: props.modalShowing ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: props.modalShowing ? '1' : '0'
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
    </div>
  );
}

export default AddModal;
