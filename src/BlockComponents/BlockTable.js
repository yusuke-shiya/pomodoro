import React, { Component } from "react";
import Block from "./Block";

class BlockTable extends Component {
  render() {
    return (
      <div className="p-blockTable">
        <Block name="仕事" />
        <Block name="仕事" />
        <Block name="資格の勉強" />
        <Block name="資格の勉強" />
      </div>
    );
  }
}

export default BlockTable;
