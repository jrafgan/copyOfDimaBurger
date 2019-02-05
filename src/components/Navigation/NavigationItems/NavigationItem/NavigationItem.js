import React from 'react';
import './NavigationItem.css';
import {NavLink} from "react-router-dom";

const NavigationItem = ({children, to, exact}) => (
  <li className="NavigationItem">
    <NavLink to={to} exact={exact}>{children}</NavLink>
  </li>
);

export default NavigationItem;
