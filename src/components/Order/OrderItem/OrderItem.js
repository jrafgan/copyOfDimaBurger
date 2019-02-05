import React from 'react';
import './OrderItem.css';

const OrderItem = ({ingredients, price}) => {
  const ingredientsOutput = Object.keys(ingredients).map(igName => (
    <span key={igName}>{igName} ({ingredients[igName]})</span>
  ));

  return (
    <div className="OrderItem">
      <p>Ingredients: {ingredientsOutput}</p>
      <p>Price: <strong>{price} KGS</strong></p>
    </div>
  );
};

export default OrderItem;
