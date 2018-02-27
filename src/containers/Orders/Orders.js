import React, {Component} from 'react';
import axios from '../../axios-orders';
import OrderItem from "../../components/Order/OrderItem/OrderItem";
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };

  componentDidMount() {
    axios.get('/orders.json')
      .then(response => {
        // response.data = {'lkjlj': {ingredients: {}, price: 21, }, '22222': {}}
        const fetchedOrders = [];
        for (let key in response.data) { // key = 'lkjlj'
          fetchedOrders.push({...response.data[key], id: key});
        }
        // fetchedOrders = [{ingredients: {}, price: 21, id: 'lkjlj'}, {}, {}]
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