import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  getCartItems() {
    fetch('/api/cart')
      .then(response => response.json())
      .then(result => this.setState({
        cart: result
      }))
      .catch(error => console.error('error:', error.message));

  }

  render() {

    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <Header />,
          <ProductList setView={this.setView} view={this.state.view} />
        </div>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <div>
          <Header />,
          <ProductDetails paramProp={this.state.view.params} setView={this.setView} />
        </div>
      );
    }
  }
}
