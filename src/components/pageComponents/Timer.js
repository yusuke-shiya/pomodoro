import React, { Component } from "react";

import MiniTomatoTable from "../TaskComponents/TomatoComponents/MiniTomatoTable";
import Timer from "../TaskComponents/TomatoComponents/Timer";
import StartStop from "../LayoutComponents/StartStop";

class Treat extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 className="p-pageTitle">集中しましょう！</h2>
        <MiniTomatoTable tasks={this.props.tasks} />
        <Timer
          name={this.props.tasks[0]}
          time={this.props.time}
          second={this.props.second}
          isStart={this.props.isStart}
        />
        <StartStop
          isStart={this.props.isStart}
          time={this.props.time}
          handleToggleStart={this.props.handleToggleStart}
        />
      </React.Fragment>
    );
  }
}

export default Treat;
