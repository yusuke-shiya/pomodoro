import React, { Component } from "react";
import Tomato from "./Tomato";

import { connect } from "react-redux";

class TomatoTable extends Component {
  render() {
    const props = this.props;
    const tomatos = [];
    props.names.forEach((name, index) => {
      tomatos.push(<Tomato name={name} time={25} key={index} />);
    });

    return <div className="p-tomatoTable">{tomatos}</div>;
  }
}

const mapStateToProps = (state) => ({ names: state.names });

export default connect(mapStateToProps, null)(TomatoTable);
