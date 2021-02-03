import React, { Component } from "react";
import Task from "./ChildComponents/Task";
import Tomato from "./ChildComponents/Tomato";

class Timer extends Component {
  render() {
    return (
      <div className="p-page">
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
        <Tomato />
      </div>
    );
  }
}

export default Timer;
