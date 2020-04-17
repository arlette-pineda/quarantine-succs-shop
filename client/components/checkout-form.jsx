import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCard = this.handleChangeCard.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.getTotal = this.getTotal.bind(this);
  }

  getTotal() {
    const initialValue = 0;
    const total = this.props.cart.reduce((accum, currV) => {
      return accum + currV.price;
    }, initialValue);
    return (total / 100).toFixed(2);
  }

  handleSubmit(event) {
    event.preventDefault();
    const orderObject = {
      name: this.state.name,
      creditCard: this.state.creditCard,
      shippingAddress: this.state.shippingAddress
    };
    this.props.placeOrder(orderObject);

  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleChangeCard(event) {
    this.setState({
      creditCard: event.target.value
    });
  }

  handleChangeAddress(event) {
    this.setState({
      shippingAddress: event.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <h3 className="mb-4">My Cart</h3>
        <small className="text-muted">Order Total: ${this.getTotal()}</small>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group-lg mb-3">
            <label className="d-block mt-4" htmlFor="customerName">Name</label>
            <input
              onChange={this.handleChangeName}
              className="form-control"
              type="text"
              id="customerName"
              required />
          </div>
          <div className="input-group-lg mb-3">
            <label className="d-block" htmlFor="creditCard">Credit Card</label>
            <input
              onChange={this.handleChangeCard}
              className="form-control"
              type="text"
              id="creditCard"
              required />
          </div>
          <div className="input-group-lg">
            <label className="d-block" htmlFor="shippingAddress">Shipping Address</label>
            <textarea
              onChange={this.handleChangeAddress}
              className="form-control"
              id="shippingAddress"
              required >
            </textarea>
          </div>
          <div className="row mt-5 ml-2 mr-2 d-flex justify-content-between">
            <small className="text-muted pointer"> &lt; Continue Shopping</small>
            <button type="submit" className="btn btn-primary">Place Order</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;
