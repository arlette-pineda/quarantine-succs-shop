import React from 'react';
// import { response } from 'express';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    this.getProductById();
    console.log('component has mounted');
  }

  getProductById(productId) {
    fetch('/api/products/1')
      .then(response => {
      // const chosenProd = this.state.product.find(element => element.id === productId);
        const jane = response.json();
        console.log('the response', jane);
      })
      .then(products => this.setState({
        product: products
      }), console.log('product now', this.state.product));

  }

  render() {
    return (
      <div className="container col-8 test">outer container
        <small className="row test2 text-muted ml-2 mb-2"> Back to catalog </small>
        <div className="test5 row" id="for-body-div">
          <img className="test3 col-6 d-inline img-details" src="images/wax-vac.jpg" alt=""/>
          <div className="test6 col-6 " id="div-for-name-shortdes-price">
            <h2 className="test4 ">Shake Weight</h2>
            <div className="test7 card-subtitle text-muted">$24.99</div>
            <div className="test8">product short description product short
              description product short description product
              short description product short description</div>
          </div>
        </div>
        <div className="row test9 p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam erat ante, fermentum et dolor ut, pellentesque volutpat nunc. Quisque eu lacus in diam accumsan eleifend vitae nec enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent egestas nunc vitae sem lobortis molestie. Proin fringilla lectus eget urna congue pretium. Integer faucibus libero id mi laoreet gravida non id diam. Proin ac hendrerit nunc. Praesent placerat magna et aliquet viverra. Sed ullamcorper sem quis blandit ullamcorper. Etiam consectetur justo orci, at mollis augue facilisis sed. Morbi tincidunt sapien at dui consectetur, in dictum lectus accumsan. Nunc molestie elementum lacus, quis iaculis ligula faucibus a. Donec feugiat finibus venenatis. Quisque et fermentum erat. Quisque erat mauris, venenatis ac molestie in, commodo vitae lorem. Sed ac dictum neque.

Proin non condimentum felis, a maximus lectus. Proin non velit sodales urna consequat sagittis. Vestibulum velit est, egestas vel diam a, laoreet iaculis eros. Sed sem purus, dapibus eu ex quis, mattis sagittis leo. Praesent efficitur mi eu iaculis rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus cursus lobortis velit nec mattis. Suspendisse potenti.

Etiam porta diam ac purus gravida fermentum. Nulla vestibulum gravida elit. Vestibulum augue arcu, aliquam quis lacus sit amet, congue luctus neque. Nullam tincidunt sem vitae tellus vulputate, ac sollicitudin augue pharetra. Phasellus vulputate nibh ut nibh viverra interdum. Phasellus euismod nisi vulputate consectetur sodales. Vestibulum quis massa mauris. Sed pharetra felis at lobortis lacinia.
        </div>
      </div>
    );
  }
}

export default ProductDetails;
