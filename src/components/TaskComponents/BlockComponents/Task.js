import React, { Component } from "react";

class Task extends Component {
  render() {
    const target = this.props.target;
    const calyx =
      process.env.PUBLIC_URL + target === "tasks"
        ? "/calyx.svg"
        : "/handle.svg";
    const background =
      process.env.PUBLIC_URL + target === "tasks"
        ? "/tomato@3x.png"
        : "/treat@3x.png";
    return (
      <div className={"p-task p-task--" + target}>
        <div className="p-task__content p-task__content">{this.props.name}</div>
        <img className="p-task__img__calyx" src={calyx} alt="" />
        <img className="p-task__img" src={background} alt="" />
      </div>
    );
  }
}

export default Task;
