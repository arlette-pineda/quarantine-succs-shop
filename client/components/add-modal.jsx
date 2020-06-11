import React from 'react';

class AddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addModal: false
    };
  }

  render() {
    return (
      <div className="modal-wrapper">
        <div className="modal-header">
          <span className="close-modal-btn">x</span>
        </div>
        <div className="modal-content">
          <div className="modal-body">
            <h5>Item has been added to cart!</h5>
          </div>
          <div className="modal-footer row">
            <button onClick={() => this.props.setView('catalog', {})} className="btn-continue col">Continue Shopping</button>
            <button onClick={() => this.props.setView('cart', {})} className="btn-checkout col">Go to Cart</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddModal;
