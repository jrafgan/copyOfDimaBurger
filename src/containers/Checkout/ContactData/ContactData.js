import React, {Component} from 'react';
import {connect} from 'react-redux';
import './ContactData.css';

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import {placeOrder} from "../../../store/actions/order";
import {Redirect} from "react-router-dom";

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    street: '',
    postal: ''
  };

  valueChanged = event => {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  };

  orderHandler = event => {
    event.preventDefault();

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: this.state.name,
        email: this.state.email,
        street: this.state.street,
        postal: this.state.postal
      }
    };

    this.props.onOrderPlaced(order);
  };

  render() {
    let form = (
      <form>
        <input className="Input" type="text" name="name" placeholder="Your Name"
               value={this.state.name} onChange={this.valueChanged} />
        <input className="Input" type="email" name="email" placeholder="Your Mail"
               value={this.state.email} onChange={this.valueChanged} />
        <input className="Input" type="text" name="street" placeholder="Street"
               value={this.state.street} onChange={this.valueChanged} />
        <input className="Input" type="text" name="postal" placeholder="Postal Code"
               value={this.state.postal} onChange={this.valueChanged} />

        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    );

    if (this.props.loading) {
      form = <Spinner />;
    }

    if (this.props.ordered) {
      form = <Redirect to="/" />;
    }

    return (
      <div className="ContactData">
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.bb.ingredients,
    price: state.bb.totalPrice,
    loading: state.order.loading,
    ordered: state.order.ordered,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onOrderPlaced: order => dispatch(placeOrder(order))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);
