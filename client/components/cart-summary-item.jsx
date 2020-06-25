import React from 'react';
import RemoveModal from './remove-modal';

class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      removeModalShowing: false
    };
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  removeFromCart(cartItemId) {
    this.props.deleteItem(cartItemId);
    this.closeModal();
  }

  showModal() {
    this.setState({
      removeModalShowing: true
    });
  }

  closeModal() {
    this.setState({
      removeModalShowing: false
    });
  }

  render() {
    return (
      <div>
        <div className="card p-3 m-2 box mb-4">
          <div className="row">
            <div className="col-md-4">
              <img className="img-details pointer" src={this.props.image} onClick={() => this.props.setView('details', { product: this.props.productId })} />
            </div>
            <div className="col-md-8 ">
              <div className="card-body">
                <h3 className="card-title brand-font">{this.props.itemName}</h3>
                <p className="card-text text-muted" >${(this.props.price / 100).toFixed(2)}</p>
                <p className="card-subtitle">{this.props.shortDesc}</p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button type="button" className="btn-remove" onClick={() => this.showModal()}>Remove</button>
          </div>
        </div>
        <RemoveModal removeModalShowing={this.state.removeModalShowing}
          showModal={this.showModal}
          closeModal={this.closeModal}
          setView={this.props.setView}
          removeFromCart={this.removeFromCart}
          cartItemId={this.props.cartItemId}
          itemName={this.props.itemName}
          image={this.props.image}
        />
      </div>
    );
  }
}

export default CartSummaryItem;
