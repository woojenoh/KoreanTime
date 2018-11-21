import React, { Component } from "react";
import Map from "./presenter";

class Container extends Component {
  state = {
    isInfoOpen: true
  };

  handleInfoOpen = () => {
    this.setState({
      isInfoOpen: true
    });
  };

  handleInfoClose = () => {
    this.setState({
      isInfoOpen: false
    });
  };

  render() {
    return (
      <Map
        {...this.state}
        {...this.props}
        handleInfoOpen={this.handleInfoOpen}
        handleInfoClose={this.handleInfoClose}
      />
    );
  }
}

export default Container;
