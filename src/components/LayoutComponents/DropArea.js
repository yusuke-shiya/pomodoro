import React, { Component } from "react";

import TomatoTable from "../TaskComponents/TomatoComponents/TomatoTable";

class DropArea extends Component {
  render() {
    return (
      <div className="p-dropArea">
        <TomatoTable
          tasks={this.props.tasks}
          onDropAdd={this.props.onDropAdd}
          target="tasks"
        />
        <TomatoTable
          treats={this.props.treats}
          onDropAdd={this.props.onDropAdd}
          target="treats"
        />
      </div>
    );
  }
}

export default DropArea;
