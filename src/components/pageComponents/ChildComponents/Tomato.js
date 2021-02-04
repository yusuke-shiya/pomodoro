import React, { Component } from "react";

class Tomato extends Component {
  render() {
    return (
      <div className="p-tomato">
        <div
          className="p-tomato__arrow"
          onClick={this.props.handlePage.bind("_", 1)}
        >
          &lt;
        </div>
        <div className="p-tomato__timer">
          <img src={`${process.env.PUBLIC_URL}/timer.svg`} alt="" />
        </div>
      </div>
    );
  }
}

export default Tomato;
