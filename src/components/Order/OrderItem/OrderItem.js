import React from 'react';

import './OrderItem.css';

const OrderItem = props => {

  const ingredientOutput = Object.keys(props.ingredients).map(igKey => (
    <span key={igKey}>{igKey} ({props.ingredients[igKey]})</span>
  ));

  if (Math.random() > 0.7) throw new Error('Well, this happened');

  return (
    <div className="OrderItem">
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price: <strong>{props.price} KGS</strong></p>
    </div>
  );
};

export default OrderItem;
