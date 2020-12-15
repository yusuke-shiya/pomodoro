import React, { Component } from "react";
import MiniTomato from "./MiniTomato";

class MiniTomatoTable extends Component {
  render() {
    const props = this.props;
    const tomatos = [];
    props.tasks.forEach((name, index) => {
      if (index) {
        tomatos.push(<MiniTomato name={name} time={25} key={index} />);
      }
    });

    return <div className="p-tomatoTable">{tomatos}</div>;
  }
}

export default MiniTomatoTable;
