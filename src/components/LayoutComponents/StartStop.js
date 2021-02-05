import React, { Component } from "react";

class Start extends Component {
  render() {
    const handleToggleStart = this.props.handleToggleStart;
    const src = this.props.isStart ? "stop" : "start";
    return (
      <div onClick={handleToggleStart} className="p-start">
        <img
          className="p-start__icon"
          src={`${process.env.PUBLIC_URL}/${src}-timer.svg`}
          alt=""
        />
      </div>
    );
  }
}

export default Start;
