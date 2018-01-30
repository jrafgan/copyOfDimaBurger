import React from 'react';
import './Burger.css';
import Ingredient from "./Ingredient/Ingredient";

const Burger = props => {
  const ingredientKeys = Object.keys(props.ingredients);

  let ingredients = [];

  ingredientKeys.forEach(igKey => {
    let amount = props.ingredients[igKey]; // 0

    for (let i = 0; i < amount; i++) {
      ingredients.push(<Ingredient key={igKey + i} type={igKey} />);
    }
  });

  if (ingredients.length === 0) {
    ingredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className="Burger">
      <Ingredient type="bread-top" />
      {ingredients}
      <Ingredient type="bread-bottom"/>
    </div>
  )
};

export default Burger;