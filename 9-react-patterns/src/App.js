import React, { Component } from "react";
import Food from "./Food";
import Meal from "./Meal";
import FoodSearch from './FoodSearch'
import { Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          {/* More verbose way to pass in multiple params - I could pass in additional props  */}
          <Route exact path="/food/:name" render={routeProps => <Food {...routeProps} />} />
          {/* Shorthand that sends component directly in, but we can't add additional props aside from routeprops */}
          {/* <Route exact path="/food/:name" component={Food}/> */}
          <Route exact path="/food/:foodName/drink/:drinkName" render={routeProps => <Meal {...routeProps} />} />
          <Route exact path="/"render={() => <FoodSearch></FoodSearch>} />
          <Route render={() => <h1>NOT FOUND</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
