import React, {Component} from 'react';
import axios from '../../../axios-orders';

import Button from "../../../components/UI/Button/Button";

import './ContactData.css';
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {

  state = {
    name: '',
    email: '',
    street: '',
    postal: '',
    loading: false
  };

  valueChanged = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

  orderHandler = event => {
    event.preventDefault();

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {...this.state}
    };

    this.setState({loading: true});

    axios.post('orders.json', order).then(() => {
      this.props.history.push('/');
    }).finally(() => {
      this.setState({loading: false});
    });
  };

  render() {
    let form = (
      <form onSubmit={this.orderHandler}>
        <input className="Input" type="text" name="name" placeholder="Your Name"
               value={this.state.name} onChange={this.valueChanged}
        />
        <input className="Input" type="email" name="email" placeholder="Your Mail"
               value={this.state.email} onChange={this.valueChanged}
        />
        <input className="Input" type="text" name="street" placeholder="Street"
               value={this.state.street} onChange={this.valueChanged}
        />
        <input className="Input" type="text" name="postal" placeholder="Postal Code"
               value={this.state.postal} onChange={this.valueChanged}
        />
        <Button btnType="Success">ORDER</Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className="ContactData">
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
