import React, { Component } from "react";

class Treat extends Component {
  render() {
    return (
      <div className="p-task">
        <div className="p-task__content p-task__content--treat">
          {this.props.name}
        </div>
        <img
          className="p-task__img__calyx"
          src={`${process.env.PUBLIC_URL}/handle.svg`}
          alt=""
        />
        <img
          className="p-task__img"
          src={`${process.env.PUBLIC_URL}/treat@3x.png`}
          alt=""
        />
      </div>
    );
  }
}

export default Treat;
