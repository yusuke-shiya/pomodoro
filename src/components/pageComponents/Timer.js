import React, { Component } from "react";

import MiniTomatoTable from "../TaskComponents/TomatoComponents/MiniTomatoTable";
import TimerTomato from "../TaskComponents/TomatoComponents/TimerTomato";
import StartStop from "../LayoutComponents/StartStop";

class Treat extends Component {
  render() {
    let elements = (
      <React.Fragment>
        <h2 className="p-pageTitle">集中しましょう！</h2>
        <MiniTomatoTable tasks={this.props.tasks} />
        <TimerTomato
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
    if (!this.props.tasks.length) {
      elements = (
        <React.Fragment>
          <h2 className="p-pageTitle">タスクは全て終了しました！</h2>
        </React.Fragment>
      );
    } else if (this.props.isBreak) {
      elements = (
        <React.Fragment>
          <h2 className="p-pageTitle">次のタスクに備えましょう！</h2>
          <MiniTomatoTable
            tasks={this.props.tasks}
            isBreak={this.props.isBreak}
          />
        </React.Fragment>
      );
    }
    return elements;
  }
}

export default Treat;
