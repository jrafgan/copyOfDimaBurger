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
        return <BuildControl
          type={control.type}
          added={() => props.ingredientAdded(control.type)}
          removed={() => props.ingredientRemoved(control.type)}
          disabled={props.disabled[control.type]}
        />
      })}
    </div>
  )
};

export default BuildControls;