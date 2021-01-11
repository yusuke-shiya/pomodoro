import React, { Component } from "react";

import BlockTable from "../TaskComponents/BlockComponents/BlockTable";
import DropArea from "../LayoutComponents/DropArea";

class Task extends Component {
  render() {
    return (
      <React.Fragment>
        <DropArea tasks={this.props.tasks} />
        <div className="p-startButton">
          <div className="p-startButton__button">START</div>
        </div>
        <div className="p-arrow"></div>
        <div className="p-arrow p-arrow--yellow"></div>
        <div className="p-blockArea">
          <BlockTable
            handleAdd={this.props.handleAdd}
            handleUpdate={this.props.handleUpdate}
            data={this.props.taskOptions}
            onDrop={this.props.onDrop}
            target="tasks"
          />
          <BlockTable
            handleAdd={this.props.handleAdd}
            handleUpdate={this.props.handleUpdate}
            data={this.props.treats}
            target="treats"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Task;
