import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img className="App-logo" src={logo} alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <p className="App-intro">
            To get started, edit{" "}
            <code>
              <a className="App-link" href="./App.js">
                src/App.js
              </a>
            </code>{" "}
            and save.
          </p>
        </header>
      </div>
    );
  }
}

export default App;