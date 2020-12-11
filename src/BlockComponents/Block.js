import React, { Component } from "react";

class BlockTable extends Component {
  render() {
    return <div className="p-block">{this.props.name}</div>;
  }
}

export default BlockTable;
