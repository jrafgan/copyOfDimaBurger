import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
          <Route render={() => <h1>Not found!</h1>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
