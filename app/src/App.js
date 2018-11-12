import React, { Component } from 'react';
import TextForm from './TextForm';
import Analyze from './Analyze';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  // componentDidMount(){
  //   console.log('ahsdf)');
  //   // Analyze();
  // }

  sendText(text) {
    console.log('text', text);
    Analyze(text);
  }

  displayAnalysis(text) {

  }

  render() {
    return (
      <div className="App">
        <h1 className="App__title">Text Analytics API Demo</h1>
        <h3 className="App__textbox-label">Enter Phrase</h3>
        <TextForm
          sendText={this.sendText}
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
