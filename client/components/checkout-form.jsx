import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zipCode: '',
      creditCard: '',
      month: '',
      year: '',
      cvv: ''
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

  handleChangeFirstName(event) {
    this.setState({
      firstName: event.target.value
    });
  }

  handleChangeLastName(event) {
    this.setState({
      lastName: event.target.value
    });
  }

  handleChangeAddressLine1(event) {
    this.setState({
      addressLine1: event.target.value
    });
  }

  handleChangeAddressLine2(event) {
    this.setState({
      addressLine2: event.target.value
    });
  }

  handleChangeCity(event) {
    this.setState({
      city: event.target.value
    });
  }

  handleChangeState(event) {
    this.setState({
      state: event.target.value
    });
  }

  handleChangeZipCode(event) {
    this.setState({
      zipCode: event.target.value
    });
  }

  handleChangeCard(event) {
    this.setState({
      creditCard: event.target.value
    });
  }

  handleChangeMonth(event) {
    this.setState({
      month: event.target.value
    });
  }

  handleChangeYear(event) {
    this.setState({
      year: event.target.value
    });
  }

  handleChangeCvv(event) {
    this.setState({
      cvv: event.target.value
    });
  }

  render() {
    return (
      <div className="container cart-height mt-5">
        <small className="back"
          onClick={() => this.props.setView('catalog', {})}>
          &lt; Continue Shopping
        </small>
        <h1 className="mb-4 mt-5 brand-font font-weight-bold">My Cart</h1>
        <h3 className="text-muted pb-4">Order Total: ${this.getTotal()}</h3>
        <form onSubmit={this.handleSubmit} autoComplete="off" className="checkout-border mb-5">
          <h2 className="mt-3">Billing Address</h2>
          <div className="row">
            <div className="input-group-lg mb-3 col-md-6">
              <label className="d-block mt-4" htmlFor="firstName">First Name</label>
              <input
                onChange={this.handleChangeFirstName}
                className="form-control"
                placeholder="John"
                type="text"
                id="firstName"
                required />
            </div>
            <div className="input-group-lg mb-3 col-md-6">
              <label className="d-block mt-4" htmlFor="lastName">Last Name</label>
              <input
                onChange={this.handleChangeLastName}
                className="form-control"
                placeholder="Smith"
                type="text"
                id="lastName"
                required />
            </div>
          </div>
          <div className="row">
            <div className="input-group-lg mb-3 col-md-6">
              <label className="d-block mt-4" htmlFor="addressLine2">Address Line 1</label>
              <input
                onChange={this.handleChangeAddressLine1}
                className="form-control"
                placeholder="1234 Your St."
                type="text"
                id="addressLine1"
                required />
            </div>
            <div className="input-group-lg mb-3 col-md-6">
              <label className="d-block mt-4" htmlFor="addressLine2">Address Line 2 </label>
              <input
                onChange={this.handleChangeAddressLine2}
                className="form-control"
                placeholder="Apt. 1"
                type="text"
                id="addressLine2"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-group-lg mb-3 col-md-6">
              <label className="d-block mt-4" htmlFor="city">City</label>
              <input
                onChange={this.handleChangeCity}
                className="form-control"
                placeholder="Your City"
                type="text"
                id="city"
                required />
            </div>
            <div className="input-group-lg mb-3 col-md-3">
              <label className="d-block mt-4" htmlFor="state">State</label>
              <input
                onChange={this.handleChangeState}
                className="form-control"
                placeholder="State"
                type="text"
                id="state"
                required />
            </div>
            <div className="input-group-lg mb-3 col-md-3">
              <label className="d-block mt-4" htmlFor="zipCode">Zip Code</label>
              <input
                onChange={this.handleChangeZipCode}
                className="form-control"
                placeholder="00000"
                type="text"
                id="zipCode"
                required />
            </div>
          </div>
          <h2 className="my-4">Payment Details</h2>
          <div className="input-group-lg mb-3 col-sm-9 px-0">
            <label className="d-block" htmlFor="creditCard">Credit Card</label>
            <input
              onChange={this.handleChangeCard}
              className="form-control"
              placeholder="xxxx xxxx xxxx xxxx"
              type="text"
              id="creditCard"
              required />
          </div>
          <div className="row">
            <div className="input-group-lg mb-3 col-sm-3">
              <label className="d-block mt-4" htmlFor="month">Month</label>
              <input
                onChange={this.handleChangeMonth}
                className="form-control"
                type="text"
                id="month"
                required />
            </div>
            <div className="input-group-lg mb-3 col-sm-3">
              <label className="d-block mt-4" htmlFor="year">Year</label>
              <input
                onChange={this.handleChangeYear}
                className="form-control"
                type="text"
                id="year"
                required />
            </div>
            <div className="input-group-lg mb-3 col-sm-3">
              <label className="d-block mt-4" htmlFor="cvv">CVV</label>
              <input
                onChange={this.handleChangeCvv}
                className="form-control"
                type="text"
                id="cvv"
                required />
            </div>
          </div>
          <div className="row mt-5 ml-2 mr-2 d-flex justify-content-end">
            <button type="submit" className="btn btn-primary mb-2">Place Order</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;
