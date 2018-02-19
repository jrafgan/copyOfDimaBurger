import React, {Component} from 'react';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import {Switch, Route} from "react-router-dom";
import Checkout from "./containers/Checkout/Checkout";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/" exact component={BurgerBuilder} />
        <Route render={() => <h1>Not found</h1>} />
      </Switch>
    );
  }
}

export default App;
