import React, { Component } from "react";
import Block from "./Block";
import Add from "../../LayoutComponents/Add";

class BlockTable extends Component {
  render() {
    const props = this.props;
    const blocks = [];
    props.tasks.forEach((name, index) => {
      blocks.push(
        <Block
          name={name}
          key={index}
          index={index}
          handleUpdateTask={props.handleUpdateTask}
        />
      );
    });
    return (
      <div className="p-blockTable">
        {blocks}
        <Add handleAddTask={props.handleAddTask}></Add>
      </div>
    );
  }
}

export default BlockTable;
