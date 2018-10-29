import React, { Component } from "react";

class BottonB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      backgroundColor: "White"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  styles = { backgroundColor: "White" };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ backgroundColor: this.state.value });
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
        <h1 style={this.state}>{this.state.value}</h1>
      </React.Fragment>
    );
  }
}

export default BottonB;
