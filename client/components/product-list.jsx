import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    fetch('/api/products')
      .then(response => response.json())
      .then(products => this.setState({
        products: products
      }))
      .catch(error => console.error(
        'error:', error.message
      ));
  }

  render() {
    return (
      <div className="container">
        <div className="row d-flex justify-content-around">
          {this.state.products.map((productPa, index) => {
            return (<ProductListItem key={index} product={productPa}
              setView={this.props.setView}
            />);
          })}
        </div>
      </div>
    );
  }
}

export default ProductList;
