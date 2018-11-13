import React, { Component } from 'react';
import TextForm from './TextForm';
import Analyze from './Analyze';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.sendText = this.sendText.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.state = {
      text: '',
      keyPhrases: '',
    };
  }

  sendText(text) {
    Analyze(text, this.handleResponse);
  }

  handleResponse(text) {
    console.log('from handle', text);
    this.setState({ keyPhrases: text })
  }

  render() {
    return (
      <div className="App">
        <h1 className="App__title">Text Analytics API Demo</h1>
        <h3 className="App__textbox-label">Enter Phrase</h3>
        <TextForm
          sendText={this.sendText}
        />
        {
          this.state.keyPhrases.length > 0 &&
          <div>
            <p>Key Phrases:</p>
            <span className="App__key-phrases">{this.state.keyPhrases} </span>
          </div>
        }
      </div>
    );
  }
}

export default App;
