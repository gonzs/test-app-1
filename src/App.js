import React, { Component } from 'react';
import './App.css';
import Title from './Title.js';
import Content from './Content.js';

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <br />
        <Content />
      </div>
    );
  }
}
export default App;
