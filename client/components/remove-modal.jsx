import React from 'react';

function RemoveModal(props) {
  const setView = props.setView;

  return (
    <div className={`${props.removeModalShowing ? 'modal-drop' : 'd-none'}`} >
      <div className="modal-wrapper"
        style={{
          transform: props.removeModalShowing ? 'translateY(0vh)' : 'translateY(-100vh)'
        }}
      >
        <div className="modal-header">
          <span className="close-modal-btn" onClick={() => props.closeModal()}>x</span>
        </div>
        <div className="modal-content">
          <div className="modal-body">
            <h5>Are you sure you want to remove item from cart?</h5>
          </div>
          <div className="modal-footer row">
            <button className="btn-cancel col">Cancel</button>
            <button onClick={} id="btn-remove-cart" className="col">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RemoveModal;
