import React from 'react';
import Ingredient from "./Ingredient/Ingredient";

import './Burger.css';

const Burger = ({ingredients}) => {
  let ingredientComponents = [];

  Object.keys(ingredients).forEach(ingredientName => {
    const amount = ingredients[ingredientName];

    for (let i = 0; i < amount; i++) {
      ingredientComponents.push(
        <Ingredient key={ingredientName + i} type={ingredientName}/>
      );
    }
  });

  if (ingredientComponents.length === 0) {
    ingredientComponents = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className="Burger">
      <Ingredient type="bread-top" />

      {ingredientComponents}

      <Ingredient type="bread-bottom" />
    </div>
  )
};

export default Burger;
