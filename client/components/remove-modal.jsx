import React from 'react';

function RemoveModal(props) {

  return (
    <div className={`${props.removeModalShowing ? 'modal-drop' : 'd-none'}`} >
      <div className="modal-wrapper"
      >
        <div className="modal-header">
          <span className="close-modal-btn" onClick={() => props.closeModal()}>x</span>
        </div>
        <div className="modal-content">
          <div className="modal-body-remove">
            <h5>Are you sure you want to remove <span id="remove-item-name">{props.itemName}</span> from cart?</h5>
            <img className="img-details-remove" src={props.image} alt=""/>
          </div>
          <div className="modal-footer row">
            <button className="btn-cancel col" onClick={() => props.closeModal()}>Cancel</button>
            <button onClick={() => props.removeFromCart(props.cartItemId)} id="btn-remove-cart" className="col">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RemoveModal;
