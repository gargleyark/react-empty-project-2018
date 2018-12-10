import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header.jsx';

import './Home.css';

class Home extends Component {
  render() {
    return <Header text="home" />;
  }
}

export default Home;
