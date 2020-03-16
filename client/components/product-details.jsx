import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  getProductById() {
    const prodId = this.props.paramProp.product;
    fetch(`api/products/${prodId}`)
      .then(response => response.json())
      .then(result => this.setState({
        product: result
      }))
      .catch(error => console.error('error:', error.message));
  }

  componentDidMount() {
    this.getProductById();
  }

  render() {
    if (this.state.product != null) {
      return (
        <div className="container prod-details-style col-7">
          <small className="row text-muted ml-2 mb-2 mt-4 pointer" onClick={() => this.props.setView('catalog', {})}> &lt;Back to catalog </small>
          <div className="row" id="for-body-div">
            <img className="col-5 d-inline img-details" src={this.state.product.image} />
            <div className="col-7" id="div-for-name-shortdes-price">
              <h2 className="">{this.state.product.name}</h2>
              <div className=" card-subtitle text-muted">${(this.state.product.price / 100).toFixed(2)}</div>
              <div className="">
                {this.state.product.shortDescription}
              </div>
            </div>
          </div>
          <div className="row p-4">
            {this.state.product.longDescription}
          </div>
        </div>
      );
    } else {
      return (null);
    }
  }
}

export default ProductDetails;
