import React from 'react';
import AddModal from './add-modal';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      addModal: false
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

  showModal() {
    this.setState({
      addModal: true
    });
  }

  closeModal() {
    this.setState({
      addModal: false
    });
  }

  render() {
    if (this.state.product != null) {
      return (
        <div>
          <div className="container col-md-9 mb-2 cart-height">
            <small className="row ml-2 my-5 mb-3 back" onClick={() => this.props.setView('catalog', {})}> &lt;Back to catalog </small>
            <div className="row">
              <img className="col-5 d-inline img-style pl-4" src={this.state.product.image} />
              <div className="col-7 card-body">
                <h2 className="font-style">{this.state.product.name}</h2>
                <div className="card-subtitle py-2 text-muted">${(this.state.product.price / 100).toFixed(2)}</div>
                <div className="card-text pb-3">
                  {this.state.product.shortDescription}
                </div>
                <button onClick={() => { this.props.addToCart(this.state.product); this.showModal(); }}
                  type="button"
                  className="btn btn-success mt-1">
                Add to Cart</button>
              </div>
            </div>
            <div className="row p-4">
              {this.state.product.longDescription}
            </div>
          </div>
          <AddModal showModal={this.showModal} closeModal={this.closeModal} setView={this.props.setView} />
        </div>
      );
    } else {
      return (null);
    }
  }
}

export default ProductDetails;
