import React, { Component } from "react";
import Tomato from "./Tomato";

class TomatoTable extends Component {
  render() {
    return (
      <div className="p-tomatoTable">
        <Tomato name="仕事" time={25} />
        <Tomato name="仕事" time={25} />
        <Tomato name="資格の勉強" time={25} />
        <Tomato name="資格の勉強" time={25} />
      </div>
    );
  }
}

export default TomatoTable;
