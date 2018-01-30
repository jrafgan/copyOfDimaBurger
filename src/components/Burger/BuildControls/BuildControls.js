import React from 'react';
import './BuildControls.css';
import BuildControl from "./BuildControl/BuildControl";

const types = ['bacon', 'salad', 'cheese', 'meat'];

const BuildControls = props => {
  return (
    <div className="BuildControls">
      <p>Current Price: <strong>{props.price} KGS</strong></p>
      {types.map(type => {
        return (
          <BuildControl
            key={type}
            type={type}
            added={() => props.ingredientAdded(type)}
            removed={() => props.ingredientRemoved(type)}
            disabled={props.disabled[type]}
          />
        );
      })}
    </div>
  )
};

export default BuildControls;