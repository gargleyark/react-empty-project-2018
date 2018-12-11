import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../views/Home/Home.jsx';
import Header from '../components/Header/Header.jsx';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={'/'} exact render={() => <Home />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
