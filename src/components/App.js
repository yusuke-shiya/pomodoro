import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./LayoutComponents/Header";
import Task from "./pageComponents/Task";
import Treat from "./pageComponents/Treat";
import Timer from "./pageComponents/Timer";
import Steps from "./LayoutComponents/Steps";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ["新規タスク"],
      treats: ["ごほうび"],
      isStart: false,
      time: 1,
      second: 0,
      timerId: null,
    };
  }

  handleAdd = (target) => {
    switch (target) {
      case "tasks":
        this.setState({
          tasks: this.state.tasks.concat("新規タスク"),
        });
        break;
      case "treats":
        this.setState({
          treats: this.state.treats.concat("ごほうび"),
        });
        break;
      default:
        break;
    }
  };
  handleUpdate = (target, index, value) => {
    const newState = this.state[target].map((task, loopIndex) => {
      return loopIndex === index ? value : task;
    });
    switch (target) {
      case "tasks":
        this.setState({
          tasks: newState,
        });
        break;
      case "treats":
        this.setState({
          treats: newState,
        });
        break;
      default:
        break;
    }
  };
  handleToggleStart = async () => {
    const currentState = this.state.isStart;
    console.log("currentStateは", currentState);
    await this.setState({
      isStart: !currentState,
    });
    console.log("isStartは", this.state.isStart);
    this.handleTimer();
  };
  handleTimer = async () => {
    if (this.state.isStart) {
      await this.setState({
        timerId: setInterval(this.countdown, 1000),
      });
    } else {
      clearInterval(this.state.timerId);
    }
  };
  countdown = async () => {
    if (!this.state.time && !this.state.second) {
      clearInterval(this.state.timerId);
      await this.setState({
        isStart: false,
      });
      alert("終了です");
      return;
    }
    if (!this.state.second) {
      await this.setState({
        time: this.state.time - 1,
        second: 59,
      });
    } else {
      await this.setState({
        second: this.state.second - 1,
      });
    }
  };

  render() {
    return (
      <div className="l-main">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Task
                  handleAdd={this.handleAdd}
                  handleUpdate={this.handleUpdate}
                  tasks={this.state.tasks}
                  target="tasks"
                />
              )}
            />
            <Route
              exact
              path="/treat"
              render={() => (
                <Treat
                  handleAdd={this.handleAdd}
                  handleUpdate={this.handleUpdate}
                  tasks={this.state.tasks}
                  treats={this.state.treats}
                  target={"treats"}
                />
              )}
            />
            <Route
              exact
              path="/timer"
              render={() => (
                <Timer
                  handleAdd={this.handleAdd}
                  handleUpdate={this.handleUpdate}
                  handleToggleStart={this.handleToggleStart}
                  tasks={this.state.tasks}
                  treats={this.state.treats}
                  target={"treats"}
                  time={this.state.time}
                  second={this.state.second}
                  isStart={this.state.isStart}
                />
              )}
            />
          </Switch>
          <Steps tasks={this.state.tasks} props={this.state.treats} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
