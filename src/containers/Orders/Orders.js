import React, {Component} from 'react';
import axios from '../../axios-orders';
import Spinner from "../../components/UI/Spinner/Spinner";
import OrderItem from "../../components/Order/OrderItem/OrderItem";

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };

  async componentDidMount() {
    try {
      const response = await axios.get('/orders.json');

      const orders = Object.keys(response.data).map(id => ({
        ...response.data[id],
        id
      }));

      this.setState({orders});
    } catch (e) {

    } finally {
      this.setState({loading: false});
    }
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
