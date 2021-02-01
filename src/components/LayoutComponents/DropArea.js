import React, { Component } from "react";

import TaskTable from "../TaskComponents/BlockComponents/TaskTable";

class DropArea extends Component {
  render() {
    return (
      <div className="p-dropArea">
        <div
          className={`p-shuffleButton${this.props.activeClass}`}
          onClick={this.props.handleShuffle}
        >
          <img src={`${process.env.PUBLIC_URL}/shuffle.svg`} alt="" />
        </div>
        <TaskTable
          activeClass={this.props.activeClass}
          tasks={this.props.tasks}
          onDropAdd={this.props.onDropAdd}
          target="tasks"
          handleRemove={this.props.handleRemove}
        />
        <TaskTable
          activeClass={this.props.activeClass}
          treats={this.props.treats}
          onDropAdd={this.props.onDropAdd}
          target="treats"
          handleRemove={this.props.handleRemove}
        />
      </div>
    );
  }
}

export default DropArea;
