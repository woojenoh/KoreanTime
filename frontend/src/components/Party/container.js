import React, { Component } from "react";
import Party from "./presenter";

class Container extends Component {
  state = {
    isScheduleModalOpen: false
  };

  handleScheduleModalOpen = () => {
    this.setState({
      isScheduleModalOpen: true
    });
  };

  handleScheduleModalClose = () => {
    this.setState({
      isScheduleModalOpen: false
    });
  };

  render() {
    return (
      <Party
        {...this.state}
        {...this.props}
        handleScheduleModalOpen={this.handleScheduleModalOpen}
        handleScheduleModalClose={this.handleScheduleModalClose}
      />
    );
  }
}

export default Container;
