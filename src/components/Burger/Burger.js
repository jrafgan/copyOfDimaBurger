import React from 'react';
import './Burger.css';
import Ingredient from "./Ingredient/Ingredient";

const Burger = ({ingredients}) => {
  let ingredientComponents = [];

  Object.keys(ingredients).forEach(ingredientName => {
    const ingredientCount = ingredients[ingredientName];

    for (let i = 0; i < ingredientCount; i++) {
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
      <Ingredient type="bread-bottom"/>
    </div>
  );
};

export default Burger;
