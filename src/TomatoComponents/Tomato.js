import React, { Component } from "react";

class TomatoTable extends Component {
  render() {
    return (
      <div className="p-tomato">
        <div className="p-tomato__content">
          <div className="p-tomato__content__name">{this.props.name}</div>
          <div className="p-tomato__content__time">{this.props.time}</div>
        </div>
        <img
          className="p-tomato__image"
          src={`${process.env.PUBLIC_URL}/tomato.svg`}
          alt=""
        />
      </div>
    );
  }
}

export default TomatoTable;
