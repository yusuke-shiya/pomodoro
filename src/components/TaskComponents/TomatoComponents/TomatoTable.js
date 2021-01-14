import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import Tomato from "./Tomato";

const dropTarget = DropTarget(
  "item",
  {
    // drop callback
    drop(dropProps, monitor, dropComponent) {
      const dragProps = monitor.getItem();
      dropProps.onDropAdd(dragProps.name, dropProps.target);
    },
  },
  (connect) => {
    return {
      connectDropTarget: connect.dropTarget(),
    };
  }
);

class TomatoTable extends Component {
  render() {
    const props = this.props;
    let tomatos = [];
    if (props[props.target].length) {
      props[props.target].forEach((name, index) => {
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

    return this.props.connectDropTarget(
      <div className="p-tomatoTable">{tomatos}</div>
    );
  }
}

export default dropTarget(TomatoTable);
