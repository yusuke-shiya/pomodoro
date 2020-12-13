import React, { Component } from "react";

import BlockTable from "../TaskComponents/BlockComponents/BlockTable";
import TomatoTable from "../TaskComponents/TomatoComponents/TomatoTable";

class Task extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 className="p-pageTitle">今から何をしますか？</h2>
        <BlockTable
          handleAdd={this.props.handleAdd}
          handleUpdate={this.props.handleUpdate}
          data={this.props.tasks}
          target={this.props.target}
        />
        <TomatoTable tasks={this.props.tasks} />
      </React.Fragment>
    );
  }
}

export default Task;
