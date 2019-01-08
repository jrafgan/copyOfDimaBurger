import React, {Component, Fragment} from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 5,
  cheese: 20,
  meat: 50,
  bacon: 30
};

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 20
  };

  addIngredient = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
  };

  removeIngredient = type => {
    const oldCount = this.state.ingredients[type];

    if (oldCount === 0) return;

    const updatedCount = oldCount - 1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;

    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
  };

  render() {
    const disabledInfo = {...this.state.ingredients};

    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] === 0;
    }

    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          ingredientAdded={this.addIngredient}
          ingredientRemoved={this.removeIngredient}
          disabledInfo={disabledInfo}
        />
      </Fragment>
    )
  }
}

export default BurgerBuilder;
