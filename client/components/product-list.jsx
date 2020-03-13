import React from 'react';
import ProductListItem from './product-list-item';
// import ProductDetails from './product-details';

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
          {this.state.products.map((productPa, index) => {
            return (<ProductListItem key={index} product={productPa}
              onClick={() => this.props.setView('details', { productId: productPa.productId })}
            />);
          })}
        </div>
      </div>
    );
  }
}

export default ProductList;
