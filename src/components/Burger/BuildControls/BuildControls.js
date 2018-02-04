import React from 'react';
import './BuildControls.css';
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  {type: 'salad'},
  {type: 'bacon'},
  {type: 'cheese'},
  {type: 'meat'},
];

const BuildControls = props => {
  return (
    <div className="BuildControls">
      <p>Current Price: {props.price}</p>
      {controls.map(control => {
        return <BuildControl key={control.type}
          type={control.type}
          added={() => props.ingredientAdded(control.type)}
          removed={() => props.ingredientRemoved(control.type)}
          disabled={props.disabled[control.type]}
        />
      })}
      <button
        disabled={!props.purchasable}
        className="OrderButton"
        onClick={props.ordered}
      >ORDER NOW</button>
    </div>
  )
};

export default BuildControls;