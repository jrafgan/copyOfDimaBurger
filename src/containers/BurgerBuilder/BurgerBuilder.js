import React, {Component} from 'react';
import {connect} from 'react-redux';

import Wrapper from "../../hoc/Wrapper";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import {addIngredient, initIngredients, removeIngredient} from "../../store/actions/burgerBuilder";
import {orderInit} from "../../store/actions/order";


class BurgerBuilder extends Component {
  state = {
    purchasing: false
  };

  isPurchasable = () => {
    const ingredients = this.props.ings;
    const sum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((sum, el) => sum + el, 0);

    return sum > 0;
  };

  purchaseHandler = () => {
    this.setState({purchasing: true});
  };

  cancelPurchaseHandler = () => {
    this.setState({purchasing: false});
  };

  purchaseContinueHandler = () => {
    this.props.onOrderInit();
    this.props.history.push('/checkout');
  };

  componentDidMount() {
    this.props.onInitIngredients();
  }

  render() {
    const disabledInfo = {...this.props.ings};

    for (let key in disabledInfo) { // 'bacon'
      disabledInfo[key] = disabledInfo[key] === 0;
    }

    return (
      <Wrapper>
        <Modal
          show={this.state.purchasing}
          closed={this.cancelPurchaseHandler}
        >
          <OrderSummary
            ingredients={this.props.ings}
            price={this.props.price}
            purchaseCancelled={this.cancelPurchaseHandler}
            purchaseContinued={this.purchaseContinueHandler}
          />
        </Modal>
        <Burger ingredients={this.props.ings} />
        <BuildControls
          price={this.props.price}
          ingredientAdded={this.props.onIngredientAdded}
          ingredientRemoved={this.props.onIngredientRemoved}
          disabled={disabledInfo}
          purchasable={this.isPurchasable()}
          ordered={this.purchaseHandler}
        />
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    ings: state.bb.ingredients,
    price: state.bb.totalPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: ingName => dispatch(addIngredient(ingName)),
    onIngredientRemoved: ingName => dispatch(removeIngredient(ingName)),
    onOrderInit: () => dispatch(orderInit()),
    onInitIngredients: () => dispatch(initIngredients())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);