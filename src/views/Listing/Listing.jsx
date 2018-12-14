import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header.jsx';

import './Listing.css';

class Listing extends Component {
  render() {
    return (
      <article>
        <Header text="Listing" />
      </article>
    );
  }
}

export default Listing;
