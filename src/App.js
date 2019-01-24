import React, { Component } from 'react';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Checkout from "./containers/Checkout/Checkout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
