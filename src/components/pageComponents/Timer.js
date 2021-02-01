import React, { Component } from "react";
import Task from "./Task";

class Timer extends Component {
  render() {
    return (
      <Task
        handleRemove={this.props.handleRemove}
        handleUpdate={this.props.handleUpdate}
        handleShuffle={this.props.handleShuffle}
        tasks={this.props.tasks}
        taskOptions={this.props.taskOptions}
        treats={this.props.treats}
        treatOptions={this.props.treatOptions}
        onDrop={this.props.onDrop}
        onDropAdd={this.props.onDropAdd}
      />
    );
  }
}

export default Timer;
