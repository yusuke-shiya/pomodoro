import React, { Component } from "react";
import Task from "./ChildComponents/Task";
import Tomato from "./ChildComponents/Tomato";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }

  handlePage = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div
        className="p-page"
        style={{
          transform: `translateX(${-(this.state.currentPage - 1) * 100}%)`,
        }}
      >
        <div className="p-page__content">
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
            handlePage={this.handlePage}
          />
        </div>
        <div className="p-page__content">
          <Tomato handlePage={this.handlePage} />
        </div>
      </div>
    );
  }
}

export default Timer;
