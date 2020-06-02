import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
      <div className="container cart-height">
        <h1 className="mb-4 mt-5">My Cart</h1>
        <h3 className="text-muted">Order Total: ${this.getTotal()}</h3>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <div className="input-group-lg mb-3">
            <label className="d-block mt-4" htmlFor="customerName">First Name</label>
            <input
              onChange={this.handleChangeName}
              className="form-control"
              placeholder="John"
              type="text"
              id="firstName"
              required />
          </div>
          <div className="input-group-lg mb-3">
            <label className="d-block mt-4" htmlFor="customerName">Last Name</label>
            <input
              onChange={this.handleChangeName}
              className="form-control"
              placeholder="Smith"
              type="text"
              id="lastName"
              required />
          </div>
          <div className="input-group-lg mb-3">
            <label className="d-block" htmlFor="creditCard">Credit Card</label>
            <input
              onChange={this.handleChangeCard}
              className="form-control"
              placeholder="xxxx xxxx xxxx xxxx"
              type="text"
              id="creditCard"
              required />
          </div>
          <div className="input-group-lg">
            <label className="d-block" htmlFor="shippingAddress">Shipping Address</label>
            <textarea
              onChange={this.handleChangeAddress}
              className="form-control"
              placeholder="Street, City, State, Zip Code"
              id="shippingAddress"
              required >
            </textarea>
          </div>
          <div className="row mt-5 ml-2 mr-2 d-flex justify-content-between">
            <small className="back"
              onClick={() => this.props.setView('catalog', {})}>
              &lt; Continue Shopping
            </small>
            <button type="submit" className="btn btn-primary mb-5">Place Order</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;
