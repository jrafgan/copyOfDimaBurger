import React, {Component} from 'react';
import axios from '../../axios-orders';
import Spinner from "../../components/UI/Spinner/Spinner";
import OrderItem from "../../components/Order/OrderItem/OrderItem";

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };

  componentDidMount() {
    axios.get('/orders.json').then(response => {
      const fetchedOrders = Object.keys(response.data).map(key => {
        return {
          ...response.data[key],
          id: key
        }
      });

      this.setState({orders: fetchedOrders});
    }).finally(() => {
      this.setState({loading: false});
    });
  }

  render() {
    if (this.state.loading) {
      return <Spinner />;
    }

    return this.state.orders.map(order => (
      <OrderItem
        key={order.id}
        ingredients={order.ingredients}
        price={order.price}
      />
    ));
  }
}

export default Orders;
