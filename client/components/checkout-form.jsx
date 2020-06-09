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
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeAddressLine1 = this.handleChangeAddressLine1.bind(this);
    this.handleChangeAddressLine2 = this.handleChangeAddressLine2.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    this.handleChangeZipCode = this.handleChangeZipCode.bind(this);
    this.handleChangeCard = this.handleChangeCard.bind(this);
    this.handleChangeMonth = this.handleChangeMonth.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.handleChangeCvv = this.handleChangeCvv.bind(this);
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
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      addressLine1: this.state.addressLine1,
      addressLine2: this.state.addressLine2,
      city: this.state.city,
      state: this.state.state,
      zipCode: this.state.zipCode,
      creditCard: this.state.creditCard,
      month: this.state.month,
      year: this.state.year,
      cvv: this.state.cvv
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
        <form onSubmit={this.handleSubmit} autoComplete="off" className="checkout-border mb-5 p-5">
          <h2 className="mt-3">Billing Address</h2>
          <div className="row">
            <div className="input-group-lg mb-3 col-md-6">
              <label className="d-block mt-4" htmlFor="firstName">First Name<sup className="">*</sup></label>
              <input
                onChange={this.handleChangeFirstName}
                className="form-control"
                placeholder="John"
                type="text"
                id="firstName"
                required />
            </div>
            <div className="input-group-lg mb-3 col-md-6">
              <label className="d-block mt-4" htmlFor="lastName">Last Name<sup className="">*</sup></label>
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
              <label className="d-block mt-4" htmlFor="addressLine2">Address Line 1<sup className="">*</sup></label>
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
              <label className="d-block mt-4" htmlFor="city">City<sup className="">*</sup></label>
              <input
                onChange={this.handleChangeCity}
                className="form-control"
                type="text"
                id="city"
                required />
            </div>
            <div className="input-group-lg mb-3 col-md-3">
              <label className="d-block mt-4" htmlFor="state">State<sup className="">*</sup></label>
              <select
                onChange={this.handleChangeState}
                className="form-control"
                type="text"
                id="state"
                required >
                <option value=""></option>
                <option value="Alabama">AL</option>
                <option value="Alaska">AK</option>
                <option value="Arizona">AZ</option>
                <option value="California">CA</option>
                <option value="Colorado">CO</option>
                <option value="Connecticut">CT</option>
                <option value="Delaware">DE</option>
                <option value="Florida">FL</option>
                <option value="Georgia">GA</option>
                <option value="Hawaii">HI</option>
                <option value="Idaho">ID</option>
                <option value="Illinois">IL</option>
                <option value="Indiana">IN</option>
                <option value="Iowa">IA</option>
                <option value="Kansas">KS</option>
                <option value="Kentucky">KY</option>
                <option value="Lousiana">LA</option>
                <option value="Maine">ME</option>
                <option value="Maryland">MD</option>
                <option value="Massachusetts">MA</option>
                <option value="Michigan">MI</option>
                <option value="Minnesota">MN</option>
                <option value="Mississippi">MS</option>
                <option value="Missouri">MO</option>
                <option value="Montana">MT</option>
                <option value="Nebraska">NE</option>
                <option value="Nevada">NV</option>
                <option value="New Hampshire">NH</option>
                <option value="New Jersey">NJ</option>
                <option value="New Mexico">NM</option>
                <option value="New York">NY</option>
                <option value="North Carolina">NC</option>
                <option value="North Dakota">ND</option>
                <option value="Ohio">OH</option>
                <option value="Oklahoma">OK</option>
                <option value="Oregon">OR</option>
                <option value="Pennsylvania">PA</option>
                <option value="Rhode Island">RI</option>
                <option value="South Carolina">SC</option>
                <option value="South Dakota">SD</option>
                <option value="Tennessee">TN</option>
                <option value="Texas">TX</option>
                <option value="Utah">UT</option>
                <option value="Vermont">VT</option>
                <option value="Viginia">VA</option>
                <option value="Washington">WA</option>
                <option value="West Virginia">WV</option>
                <option value="Wisconsin">WI</option>
                <option value="Wyoming">WY</option>
              </select>
            </div>
            <div className="input-group-lg mb-3 col-md-3">
              <label className="d-block mt-4" htmlFor="zipCode">Zip Code<sup className="">*</sup></label>
              <input
                onChange={this.handleChangeZipCode}
                className="form-control"
                type="text"
                id="zipCode"
                required />
            </div>
          </div>
          <h2 className="my-4">Payment Details</h2>
          <div className="input-group-lg mb-3 col-sm-9 px-0">
            <label className="d-block" htmlFor="creditCard">Credit Card<sup className="">*</sup></label>
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
              <label className="d-block mt-4" htmlFor="month">Month<sup className="">*</sup></label>
              <select
                onChange={this.handleChangeMonth}
                className="form-control"
                type="text"
                id="month"
                required >
                <option value=""></option>
                <option value="January">Jan</option>
                <option value="February">Feb</option>
                <option value="March">Mar</option>
                <option value="April">Apr</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">Aug</option>
                <option value="September">Sept</option>
                <option value="October">Oct</option>
                <option value="November">Nov</option>
                <option value="December">Dec</option>
              </select>
            </div>
            <div className="input-group-lg mb-3 col-sm-3">
              <label className="d-block mt-4" htmlFor="year">Year<sup className="">*</sup></label>
              <select
                onChange={this.handleChangeYear}
                className="form-control"
                type="text"
                id="year"
                required >
                <option value=""></option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </select>
            </div>
            <div className="input-group-lg mb-3 col-sm-3">
              <label className="d-block mt-4" htmlFor="cvv">CVV<sup className="">*</sup></label>
              <input
                onChange={this.handleChangeCvv}
                className="form-control"
                type="text"
                id="cvv"
                required />
            </div>
          </div>
          <div className="row disclaimer mt-5">
            <div className="custom-control-lg custom-control custom-checkbox mt-5">
              <input
                className="custom-control-input"
                id="checkbox-large"
                type="checkbox"
                required />
              <label className="custom-control-label pl-2" htmlFor="checkbox-large" ><sup className="">*  </sup>
                I understand that this website is for demonstration purposes only, no payment processing will occur, and I should not use personal information in the form above.
              </label>
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
