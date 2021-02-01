import React, { Component } from "react";
import Block from "./Block";

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
    return <div className="p-blockTable">{blocks}</div>;
  }
}

export default BlockTable;
