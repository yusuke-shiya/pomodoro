import React, { Component } from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import TouchBackend from "react-dnd-touch-backend";

import BlockTable from "../TaskComponents/BlockComponents/BlockTable";
import DropArea from "../LayoutComponents/DropArea";

function isAndroid() {
  return !!window.navigator.userAgent.match(/Android/);
}

function isIOS() {
  return !!window.navigator.userAgent.match(/iPhone|iPad|iPod/);
}

class Task extends Component {
  render() {
    const activeClass =
      this.props.tasks.length === this.props.treats.length &&
      this.props.tasks.length !== 0
        ? " active"
        : "";
    return (
      <React.Fragment>
        <DropArea
          activeClass={activeClass}
          tasks={this.props.tasks}
          treats={this.props.treats}
          onDropAdd={this.props.onDropAdd}
          handleRemove={this.props.handleRemove}
          handleShuffle={this.props.handleShuffle}
        />
        <div className={"p-startButton" + activeClass}>
          <div className="p-startButton__button">START</div>
        </div>
        <div className="p-blockArea">
          <div className="p-arrow"></div>
          <div className="p-arrow p-arrow--yellow"></div>
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

export default DragDropContext(
  isAndroid() || isIOS() ? TouchBackend : HTML5Backend
)(Task);
