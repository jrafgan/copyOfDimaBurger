import React from 'react';
import BuildControl from "./BuildControl/BuildControl";

import './BuildControls.css';

const controls = [
  {type: 'salad'},
  {type: 'bacon'},
  {type: 'cheese'},
  {type: 'meat'},
];

const BuildControls = props => {
  return (
    <div className="BuildControls">
      <p>Current price: <strong>{props.price} KGS</strong></p>
      {controls.map(control => (
        <BuildControl
          key={control.type}
          type={control.type}
          added={() => props.ingredientAdded(control.type)}
          removed={() => props.ingredientRemoved(control.type)}
          disabled={props.disabledInfo[control.type]}
        />
      ))}
      <button
        className="OrderButton"
        disabled={!props.purchasable}
        onClick={props.purchase}
      >
        ORDER NOW
      </button>
    </div>
  )
};

export default BuildControls;
