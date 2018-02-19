import React, {Component, Fragment} from 'react';
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import {Route} from "react-router-dom";

class Checkout extends Component {
  state = {
    ingredients: {},
    price: 0
  };

  componentDidMount() {
    console.log('[Checkout] didMount', this.props);
    const query = new URLSearchParams(this.props.location.search); // ?bacon=3&cheese=2&price=210
    const ingredients = {};
    let price = 0;

    for (let param of query.entries()) { //[ ['bacon', '3'], ['price', '210'],
      // ['bacon', '3']
      if (param[0] === 'price') {
        price = param[1];
      } else {
        ingredients[param[0]] = parseInt(param[1], 10);
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
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={this.props.match.path + '/contact-data'}
          render={props => ( // {history: {}, location: {}, match: {}, }
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.price}
              {...props}
            />
          )}
          // component={ContactData}
        />
      </Fragment>
    );
  }
}

export default Checkout;