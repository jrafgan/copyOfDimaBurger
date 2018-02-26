import React, {Component, Fragment} from 'react';
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import {Route} from "react-router-dom";

class Checkout extends Component {
  state = {
    ingredients: {
      bacon: 1,
      cheese: 2,
      salad: 2,
      meat: 1
    },
    price: 0
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search); // salad=3&cheese=2&price=210
    const ingredients = {};
    let price = 0;

    for (let param of query.entries()) {
      // ['salad', '3']
      if (param[0] === 'price') {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }

    this.setState({ingredients, price});
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    return (
      <Fragment>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutContinued={this.checkoutContinuedHandler}
          checkoutCancelled={this.checkoutCancelledHandler}
        />
        <Route
          path={this.props.match.path + '/contact-data'}
          render={(props) => { // {history: {}, location: {}, match: {}, ...}
            return <ContactData
              ingredients={this.state.ingredients}
              price={this.state.price}
              {...props}
            />;
          }}
        />
      </Fragment>
    );
  }
}

export default Checkout;