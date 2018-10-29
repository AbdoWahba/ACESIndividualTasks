import React, { Component } from "react";
import BottonB from "./bottonB";
class BottonA extends Component {
  state = { isOn: false };
  renderPage = () => {
    this.setState({ isOn: !this.state.isOn });
    console.log(this.state.isOn);
  };
  renderpagestate = () => {
    if (this.state.isOn === true) {
      return <BottonB />;
    } else {
      return null;
    }
  };
  render() {
    return (
      <React.Fragment>
        <botton onClick={this.renderPage} className="btn btn-secondary btn-sm">
          {this.state.isOn === false && "show me this page"}
          {this.state.isOn === true && "hide this page"}
        </botton>
        <p>{this.renderpagestate()}</p>
      </React.Fragment>
    );
  }
}

export default BottonA;
