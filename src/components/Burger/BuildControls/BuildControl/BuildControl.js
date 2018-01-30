import React from 'react';
import './BuildControl.css';

const BuildControl = props => {
  return (
    <div className="BuildControl">
      <div className="Label">{props.type}</div>
      <button onClick={props.removed} disabled={props.disabled} className="Less">Less</button>
      <button onClick={props.added} className="More">More</button>
    </div>
  )
};

export default BuildControl;