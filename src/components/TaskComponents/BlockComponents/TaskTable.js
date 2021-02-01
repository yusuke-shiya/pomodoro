import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import Task from "../BlockComponents/Task";

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

class TaskTable extends Component {
  render() {
    const props = this.props;
    let tasks = [];
    if (props[props.target].length) {
      props[props.target].forEach((name, index) => {
        tasks.push(
          <Task
            name={name}
            target={props.target}
            index={index}
            key={index}
            handleRemove={props.handleRemove}
          />
        );
      });
    } else {
      tasks = (
        <div className="p-taskTable__dropArea">
          <span className="p-taskTable__dropArea__txt">
            タスクを追加
            <br />
            してください
          </span>
        </div>
      );
    }

    return this.props.connectDropTarget(
      <div className={`p-taskTable${this.props.activeClass}`}>
        <div
          className={`p-taskTable__title p-taskTable__title--${props.target}`}
        >
          {props.target === "tasks" ? "TASK" : "GOHOBI"}
        </div>
        {tasks}
      </div>
    );
  }
}

export default dropTarget(TaskTable);
