import React, { Component } from "react";

class Tomato extends Component {
  initialTime = this.props.time;

  render() {
    const time = this.props.time;
    const hidden = 100 - Math.floor((time / this.initialTime) * 100);
    return (
      <div className="p-tomato">
        <div
          className="p-tomato__arrow"
          onClick={async () => {
            await this.props.setState({
              isStart: false,
            });
            this.props.handleTimer();
            this.props.handlePage(1);
          }}
        >
          &lt;
        </div>
        <div className="p-tomato__timer">
          <img
            src={`${process.env.PUBLIC_URL}/timer-calyx.svg`}
            alt=""
            className="p-tomato__timer__calyx"
          />
          <span className="p-tomato__timer__name">
            {this.props.currentTask}
          </span>
          <img src={`${process.env.PUBLIC_URL}/timer.svg`} alt="" />
          <div
            className="p-tomato__timer__overlay"
            style={{ height: `${hidden}%` }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Tomato;
