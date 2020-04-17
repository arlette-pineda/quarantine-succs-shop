import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
  }

  render() {
    return (
      <div className="container">
        <h3 className="mb-4">My Cart</h3>
        <small className="text-muted">Order Total: $XX.xx</small>
        <form>
          <div className="input-group-lg mb-2">
            <label className="d-block mt-4" htmlFor="customerName">Name</label>
            <input
              // onChange={}
              className="form-control"
              type="text"
              id="customerName"
              required />
          </div>
          <div className="input-group-lg mb-2">
            <label className="d-block" htmlFor="creditCard">Credit Card</label>
            <input
              // onChange={}
              className="form-control"
              type="text"
              id="creditCard"
              required />
          </div>
          <div className="input-group-lg mb-2">
            <label className="d-block" htmlFor="shippingAddress">Shipping Address</label>
            <textarea
              // onChange={}
              className="form-control"
              id="shippingAddress"
              required >
            </textarea>
          </div>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;
