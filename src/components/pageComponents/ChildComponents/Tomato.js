import React, { Component } from "react";

class Tomato extends Component {
  render() {
    return (
      <div className="p-page__content">
        <img src={`${process.env.PUBLIC_URL}/timer.svg`} alt="" />
      </div>
    );
  }
}

export default Tomato;
