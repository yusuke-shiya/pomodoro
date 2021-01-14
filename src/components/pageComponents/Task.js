import React, { Component } from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import BlockTable from "../TaskComponents/BlockComponents/BlockTable";
import DropArea from "../LayoutComponents/DropArea";

class Task extends Component {
  render() {
    return (
      <React.Fragment>
        <DropArea
          tasks={this.props.tasks}
          treats={this.props.treats}
          onDropAdd={this.props.onDropAdd}
        />
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
            target="taskOptions"
          />
          <BlockTable
            handleAdd={this.props.handleAdd}
            handleUpdate={this.props.handleUpdate}
            data={this.props.treatOptions}
            onDrop={this.props.onDrop}
            target="treatOptions"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default DragDropContext(HTML5Backend)(Task);
