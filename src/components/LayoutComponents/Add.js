import React, { Component } from "react";

class Add extends Component {
  render() {
    const handleAddTask = this.props.handleAddTask;
    return (
      <div onClick={handleAddTask} className="p-add">
        <img
          className="p-add__icon"
          src={`${process.env.PUBLIC_URL}/plus.svg`}
          alt=""
        />
      </div>
    );
  }
}

export default Add;
