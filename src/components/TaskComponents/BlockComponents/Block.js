import React, { Component } from "react";

class Block extends Component {
  render() {
    return (
      <div className="p-block">
        <input
          name="name"
          type="text"
          defaultValue={this.props.name}
          onChange={(e) => {
            this.props.handleUpdate(
              this.props.target,
              this.props.index,
              e.target.value
            );
          }}
          className="p-block__input"
        />
      </div>
    );
  }
}

export default Block;
