import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../views/Home/Home.jsx';
import Header from '../components/Header/Header.jsx';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    fetch(
      'https://raw.githubusercontent.com/gargleyark/react-empty-project-2018/react-routing-with-link/src/data/products.json'
    )
      .then(res => res.json())
      .then(data => this.setState({ products: data }));
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={'/'} exact render={() => <Home />} />
          <Route path={'/listing'} exact render={() => <Home />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
