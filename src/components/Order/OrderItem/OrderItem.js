import React from 'react';
import './OrderItem.css';

const OrderItem = props => {
  // props.ingredients = {bacon: 3, cheese: 2...

  const ingredients = [];

  for (let ingredientName in props.ingredients) { // ingredientName = 'bacon'
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientsOutput = ingredients.map(ig => (
    <span key={ig.name}>{ig.name} ({ig.amount})</span>
  ));

  return (
    <div className="OrderItem">
      <p>Ingredients: {ingredientsOutput}</p>
      <p>Price: <strong>{props.price} KGS</strong></p>
    </div>
  )
};

export default OrderItem;