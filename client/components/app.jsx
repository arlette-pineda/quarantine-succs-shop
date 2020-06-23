import React from 'react';
import Header from './header';
import Disclaimer from './disclaimer';
import Carousel from './carousel';
import Footer from './footer';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: [],
      disclaimer: true
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.deleteItemInCart = this.deleteItemInCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.handleDisclaimer = this.handleDisclaimer.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  handleDisclaimer() {
    this.setState({
      disclaimer: false
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

  addToCart(product) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    };
    fetch('/api/cart', req)
      .then(response => response.json())
      .then(cartItem => {
        const allItems = this.state.cart.concat(cartItem);
        this.setState({
          cart: allItems
        });
      })
      .catch(err =>
        console.error(err)
      );
  }

  deleteItemInCart(theCartItemId) {
    const req = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ theCartItemId })
    };
    fetch(`/api/cart/${theCartItemId}`, req)
      .then(response => response.json())
      .then(result => this.getCartItems())
      .catch(err =>
        console.error(err)
      );
  }

  placeOrder(orderObject) {
    fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderObject)
    })
      .then(response => response.json())
      .then(orderResult => {
        this.setState({
          view: {
            name: 'catalog',
            params: {}
          },
          cart: []
        });
      })
      .catch(err =>
        console.error(err)
      );
  }

  render() {
    let disclaimer = null;
    if (this.state.disclaimer === true) {
      disclaimer = <Disclaimer setView={this.setView} handleDisclaimer={this.handleDisclaimer} />;
    } else {
      disclaimer = false;
    }
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          {disclaimer}
          <Header cartItemCount={this.state.cart} setView={this.setView} />
          <Carousel />
          <ProductList setView={this.setView} view={this.state.view} />
          <Footer />
        </div>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <div>
          <Header cartItemCount={this.state.cart} setView={this.setView} />
          <ProductDetails paramProp={this.state.view.params} setView={this.setView} addToCart={this.addToCart} />
          <Footer />
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <div>
          <Header cartItemCount={this.state.cart} setView={this.setView} />
          <CartSummary cart={this.state.cart} setView={this.setView} paramProp={this.state.view.params} deleteItem={this.deleteItemInCart} />
          <Footer />
        </div>
      );
    } else if (this.state.view.name === 'checkout') {
      return (
        <div>
          <Header cartItemCount={this.state.cart} setView={this.setView} />
          <CheckoutForm cart={this.state.cart} placeOrder={this.placeOrder} setView={this.setView} />
          <Footer />
        </div>
      );
    }
  }
}
