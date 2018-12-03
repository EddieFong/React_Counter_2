import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {number : 0}

  changeNumberPlus = () => {
    this.setState({number: this.state.number + 1})
  }

  changeNumberMinus = () => {
    this.setState({number: this.state.number - 1})
  }

  render() {
    return (
      <div className="App">
        <button onClick = {this.changeNumberMinus}>
          -
        </button>
        <span>
          number: {this.state.number}
        </span>
        <button onClick = {this.changeNumberPlus}>
          +
        </button>
      </div>
    );
  }
}

export default App;
