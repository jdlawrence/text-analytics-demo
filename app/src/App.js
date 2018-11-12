import React, { Component } from 'react';
import TextForm from './TextForm';
import Analyze from './Analyze';
import './App.scss';

class App extends Component {
  componentDidMount(){
    console.log('ahsdf)');
    Analyze();
  }

  printText(text) {
    console.log('text', text);
  }

  displayAnalysis(text) {

  }

  render() {
    return (
      <div className="App">
        <h1 className="App__title">Text Analytics API Demo</h1>
        <h3 className="App__textbox-label">Enter Phrase</h3>
        <TextForm
          printText={this.printText}
        />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        here
      </div>
    );
  }
}

export default App;
