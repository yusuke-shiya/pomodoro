import React, { Component } from "react";

class Tomato extends Component {
  render() {
    return (
      <div className="p-tomato">
        <div className="p-tomato__content">
          <div className="p-tomato__content__name">{this.props.name}</div>
        </div>
        <img
          className="p-tomato__img__calyx"
          src={`${process.env.PUBLIC_URL}/calyx.svg`}
          alt=""
        />
        <img
          className="p-tomato__img"
          src={`${process.env.PUBLIC_URL}/tomato@3x.png`}
          alt=""
        />
      </div>
    );
  }
}

export default Tomato;
