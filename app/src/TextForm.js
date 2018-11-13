import React, { Component } from 'react';
import './TextForm.scss';

class TextForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.sendText(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className="Text-form__input" type="text" value={this.state.value} onChange={this.handleChange} />
          <div className="Text-form__analyze">
            <input  type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default TextForm;