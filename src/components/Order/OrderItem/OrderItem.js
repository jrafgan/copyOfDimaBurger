import React from 'react';
import './OrderItem.css';

const OrderItem = props => {
  // props.ingredients = {bacon: 3, meat: 2}
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientOutput = ingredients.map(ig => (
    <span key={ig.name}>{ig.name} ({ig.amount})</span>
  ));

  return (
    <div className="OrderItem">
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price: <strong>{props.price} KGS</strong></p>
    </div>
  );
};

export default OrderItem;