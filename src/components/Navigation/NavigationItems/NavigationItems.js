import React from 'react';
import './NavigationItems.css';
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => (
  <ul className="NavigationItems">
    <NavigationItem to="/" exact>Burger Builder</NavigationItem>
    <NavigationItem to="/orders">Orders</NavigationItem>
  </ul>
);

export default NavigationItems;
