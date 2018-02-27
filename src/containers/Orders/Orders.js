import React, {Component} from 'react';
import OrderItem from "../../components/Order/OrderItem/OrderItem";
import Spinner from "../../components/UI/Spinner/Spinner";

import axios from '../../axios-orders';

class Orders extends Component {
  state = {
    loading: true,
    orders: []
  };

  componentDidMount() {
    axios.get('/orders.json')
      .then(response => {
        // response.data = {'lkjlj': {ingredients: {}, price: 123, }}
        const fetchedOrders = [];
        for (let key in response.data) {
          fetchedOrders.push({...response.data[key], id: key});
        }
        // fetchedOrders = [{ingredients: {}, price: 123, id: 'lkjlj'}, {}]
        this.setState({orders: fetchedOrders, loading: false});
      })
      .catch(() => {
        this.setState({loading: false});
      });
  }

  render() {
    let orders = this.state.orders.map(order => (
      <OrderItem key={order.id}
                 ingredients={order.ingredients}
                 price={order.price}
      />
    ));

    if (this.state.loading) {
      orders = <Spinner />;
    }

    return orders;
  }
}

export default Orders;