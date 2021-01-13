import React, { Component } from "react";
import TomatoTable from "../TaskComponents/TomatoComponents/TomatoTable";

class DropArea extends Component {
  render() {
    return (
      <div className="p-dropArea">
        <TomatoTable tasks={this.props.tasks} />
        <TomatoTable tasks={this.props.tasks} />
      </div>
    );
  }
}

export default DropArea;
