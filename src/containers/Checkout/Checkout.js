import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom';
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  };

  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);

    const ingredients = {};

    for (let param of query.entries()) {
      // param = ['cheese', '3']
      ingredients[param[0]] = parseInt(param[1]);
    }

    this.setState({ingredients});
  }

  checkoutCancelled = () => {
    this.props.history.goBack();
  };

  checkoutContinued = () => {
    this.props.history.replace(this.props.match.path + '/contact-data');
  };

  render() {
    return (
      <Fragment>
        <CheckoutSummary
          checkoutCancelled={this.checkoutCancelled}
          checkoutContinued={this.checkoutContinued}
          ingredients={this.state.ingredients}
        />
        <Route
          path={this.props.match.path + '/contact-data'}
          render={props => <ContactData />}
        />
      </Fragment>
    );
  }
}

export default Checkout;
