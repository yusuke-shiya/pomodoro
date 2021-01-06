import React, { Component } from "react";

import BlockTable from "../TaskComponents/BlockComponents/BlockTable";
import DropArea from "../LayoutComponents/DropArea";

class Task extends Component {
  render() {
    return (
      <React.Fragment>
        <DropArea tasks={this.props.tasks} />
        <div className="p-separate">▲今日のタスク▲</div>
        <div className="p-blockArea">
          <BlockTable
            handleAdd={this.props.handleAdd}
            handleUpdate={this.props.handleUpdate}
            data={this.props.tasks}
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
