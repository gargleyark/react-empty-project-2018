import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'hello',
      text1: '2'
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ text: 'bye' });
    }, 1000);
  }

  componentShouldUpdate(prevProps, {
      text: 'hello',
      text1: '2'
    }, nextProps, { text: 'bye', text1: '2' }) {
      if ('text1 hasn\'t changed') {
        return true

      }
      return false;
  }

  render() {
    const { text } = this.state;
    return <div>{text}</div>;
  }
}

export default App;
