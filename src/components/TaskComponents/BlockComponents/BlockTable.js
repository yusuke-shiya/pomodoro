import React, { Component } from "react";
import Block from "./Block";
import Add from "../../LayoutComponents/Add";

import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

class BlockTable extends Component {
  render() {
    const props = this.props;
    const blocks = [];
    props.data.forEach((name, index) => {
      blocks.push(
        <Block
          name={name}
          key={index}
          index={index}
          target={this.props.target}
          handleUpdate={props.handleUpdate}
          onDrop={this.props.onDrop}
        />
      );
    });
    return (
      <div className="p-blockTable">
        {blocks}
        <Add handleAdd={props.handleAdd} target={this.props.target}></Add>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(BlockTable);
