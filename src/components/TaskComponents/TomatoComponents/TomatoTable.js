import React, { Component } from "react";
import Tomato from "./Tomato";

class TomatoTable extends Component {
  render() {
    const props = this.props;
    const tomatos = [];
    props.tasks.forEach((name, index) => {
      tomatos.push(<Tomato name={name} time={25} key={index} />);
    });

    return <div className="p-tomatoTable">{tomatos}</div>;
  }
}

export default TomatoTable;
