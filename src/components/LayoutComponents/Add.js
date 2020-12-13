import React, { Component } from "react";

class Add extends Component {
  render() {
    const handleAdd = this.props.handleAdd;
    return (
      <div onClick={handleAdd.bind(null, this.props.target)} className="p-add">
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
