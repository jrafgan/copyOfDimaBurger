import React, {Component} from 'react';
import Wrapper from "../../hoc/Wrapper";
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

  addIngredientHandler = type => { // 'meat'
    const oldCount = this.state.ingredients[type]; // 1
    const updatedCount = oldCount + 1;  // 2
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type]; // 50
    const oldPrice = this.state.totalPrice; // 20
    const newPrice = oldPrice + priceAddition; // 20 + 50 = 70
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
  };

  removeIngredientHandler = type => {
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
    // {meat: true, bacon: false, cheese: true, salad: false}
    const disabledInfo = {...this.state.ingredients};

    for (let key in disabledInfo) { // 'bacon'
      disabledInfo[key] = disabledInfo[key] === 0;
    }

    return (
      <Wrapper>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
        />
      </Wrapper>
    )
  }
}

export default BurgerBuilder;