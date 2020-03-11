import React from 'react';
import ProductListItem from './product-list-item';
// import ProductListItem from './product-list-item';

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
        <div className="row">
          {this.state.products.map((singleProduct, index) => {
            return (<ProductListItem key={index} prodProp={singleProduct}
            />);
          })}
        </div>
      </div>
    );
  }
}

export default ProductList;
