import React, { Component } from "react";
import Block from "./Block";
import Add from "../../LayoutComponents/Add";

import { connect } from "react-redux";

class BlockTable extends Component {
  render() {
    const props = this.props;
    const blocks = [];
    props.names.forEach((name, index) => {
      blocks.push(<Block name={name} key={index} />);
    });
    return (
      <div className="p-blockTable">
        {blocks}
        <Add></Add>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ names: state.names });

export default connect(mapStateToProps, null)(BlockTable);
