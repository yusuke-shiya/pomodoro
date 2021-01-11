import React, { Component } from "react";
import Tomato from "./Tomato";

class TomatoTable extends Component {
  render() {
    const props = this.props;
    let tomatos = [];
    if (props.tasks.length) {
      props.tasks.forEach((name, index) => {
        tomatos.push(<Tomato name={name} time={25} key={index} />);
      });
    } else {
      tomatos = (
        <div className="p-tomatoTable__dropArea">
          <span className="p-tomatoTable__dropArea__txt">
            タスクを追加
            <br />
            してください
          </span>
        </div>
      );
    }

    return <div className="p-tomatoTable">{tomatos}</div>;
  }
}

export default TomatoTable;
