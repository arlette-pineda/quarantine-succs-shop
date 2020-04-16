import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cartItemCount = this.props.cartItemCount;
    return (
      <div className="container">
        <div className="header">
          <p>$ Wicked Sales</p>
        </div>
        <div>
          <p className="m-2">{`${cartItemCount} items`}</p>
          <i className="fas fa-shopping-cart fa-2x"></i>
        </div>
      </div>
    );
  }
}

export default Header;
