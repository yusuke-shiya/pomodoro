import React, { Component } from "react";

import { connect } from "react-redux";
import { create } from "../../actions";

class Add extends Component {
  render() {
    const props = this.props;
    return (
      <div onClick={props.create} className="p-add">
        <img
          className="p-add__icon"
          src={`${process.env.PUBLIC_URL}/plus.svg`}
          alt=""
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ names: state.names });
const mapDispatchToProps = { create };

export default connect(mapStateToProps, mapDispatchToProps)(Add);
