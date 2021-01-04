import React, { Component } from "react";
import Block from "./Block";
import Add from "../../LayoutComponents/Add";

class DropArea extends Component {
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

export default DropArea;
