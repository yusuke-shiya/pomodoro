import React, { Component } from "react";

class TimerTomato extends Component {
  render() {
    const minute = this.props.time;
    const second = ("0" + this.props.second).slice(-2);

    return (
      <div className="p-tomato p-tomato--large">
        <div className="p-tomato__content">
          <div className="p-tomato__content__name">{this.props.name}</div>
          <div className="p-tomato__content__time p-tomato__content__time--large">
            {minute}:{second}
          </div>
        </div>
        <img
          className="p-tomato__img"
          src={`${process.env.PUBLIC_URL}/tomato.svg`}
          alt=""
        />
      </div>
    );
  }
}

export default TimerTomato;
