import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const electron = window.require('electron');
const { ipcRenderer } = electron;

class App extends Component {
  componentDidMount() {
    // Electron IPC example
    ipcRenderer.on('manipulatedData', function(event, arg) {
      console.log(arg);
    });
  }
  componentWillUnmount() {
    // Electron IPC example
    ipcRenderer.removeAllListeners('manipulatedData');
  }
  sendIpcData = () => {
    // Electron IPC example
    ipcRenderer.send('user-data', 'important INFO!');
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome Joey!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.sendIpcData}>Send IPC Data</button>
      </div>
    );
  }
}

export default App;
