import React, { Component } from 'react';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Checkout from "./containers/Checkout/Checkout";
import Layout from "./components/Layout/Layout";
import Orders from "./containers/Orders/Orders";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/pages/:name" component={Page} />
          <Route path="/" component={Page} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
