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
      <div>
        <p>Here is the checkout form.</p>
      </div>
    );
  }
}

export default CheckoutForm;
