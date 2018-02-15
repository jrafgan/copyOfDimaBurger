import React, {Component, Fragment} from 'react';
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import {Route} from "react-router-dom";

class Checkout extends Component {
  state = {
    ingredients: {}
  };

  componentDidMount() {
    console.log(this.props);
    const query = new URLSearchParams(this.props.location.search); // ?bacon=3&cheese=2
    const ingredients = {};

    for (let param of query.entries()) {
      // ['bacon', '3']
      ingredients[param[0]] = parseInt(param[1], 10);
    }

    this.setState({ingredients});
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
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={this.props.match.path + '/contact-data'}
          render={() => <ContactData ingredients={this.state.ingredients} />}
        />
      </Fragment>
    );
  }
}

export default Checkout;