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
      keyPhrasesArray: [],
      keyPhrasesString: '',
    };
  }

  sendText(text) {
    Analyze(text, this.handleResponse);
  }

  handleResponse(response) {
    console.log('from handle', response);
    this.setState({
      keyPhrasesArray: response.keyPhrasesArray,
      keyPhrasesString: response.keyPhrasesString,
    });
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
          this.state.keyPhrasesArray.length > 0 &&
          <div>
            <div className="App__key-phrases-number">Total key phrases: {this.state.keyPhrasesArray.length} </div>
            <div className="App__key-phrases">{this.state.keyPhrasesString} </div>
          </div>
        }
      </div>
    );
  }
}

export default App;
