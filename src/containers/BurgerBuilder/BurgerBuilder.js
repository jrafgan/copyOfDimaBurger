import React, {Component} from 'react';
import {connect} from 'react-redux';

import Wrapper from "../../hoc/Wrapper";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

import {addIngredient, removeIngredient} from "../../store/actions/burgerBuilder";


class BurgerBuilder extends Component {
  state = {
    purchasing: false
  };

  isPurchasable = () => {
    const ingredients = this.props.ings;
    const sum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey]) // [1, 3, 4, 2]
      .reduce((sum, el) => sum + el, 0);

    return sum > 0;
  };

  purchaseHandler = () => {
    this.setState({purchasing: true});
  };

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  };

  purchaseContinueHandler = () => {
    this.props.history.push('/checkout');
  };

  render() {
    const disabledInfo = {...this.props.ings};

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Wrapper>
        <Modal
          show={this.state.purchasing}
          closed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.props.ings}
            price={this.props.price}
            purchaseCancelled={this.purchaseCancelHandler}
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
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch(addIngredient(ingName)),
    onIngredientRemoved: (ingName) => dispatch(removeIngredient(ingName))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);