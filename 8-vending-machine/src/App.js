import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import VendingMachine from './VendingMachine';
import Onion from './Onion';
import Olive from './Olive';
import Navbar from './Navbar';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' component={VendingMachine} />
          <Route exact path='/onion' component={Onion} />
          <Route exact path='/olive' component={Olive} />
          {/* Re-use the existing dog component
          <Route exact path='/olive' render={() => <Olive  />} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;