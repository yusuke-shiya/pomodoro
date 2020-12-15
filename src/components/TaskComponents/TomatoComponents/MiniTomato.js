import React, { Component } from "react";

class MiniTomato extends Component {
  render() {
    return (
      <div className="p-tomato p-tomato--mini">
        <div className="p-tomato__content">
          <div className="p-tomato__content__name">{this.props.name}</div>
          <div className="p-tomato__content__time">{this.props.time}分</div>
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

export default MiniTomato;
