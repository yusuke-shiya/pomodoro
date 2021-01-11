import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Header from "./LayoutComponents/Header";
import Task from "./pageComponents/Task";
import Treat from "./pageComponents/Treat";
import Timer from "./pageComponents/Timer";
import Break from "./pageComponents/Break";
// import Steps from "./LayoutComponents/Steps";

import SortableList from "./dnd/SortableList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskOptions: ["新規タスク"],
      treats: ["ごほうび"],
      isStart: false,
      time: 0,
      second: 5,
      timerId: null,
      lastTask: null,
      treasure: null,
      isBreak: false,
    };
  }

  onDrop = (toId, fromId) => {
    const items = this.state.tasks;
    const toItem = items[toId];
    const fromItem = items[fromId];
    items[toId] = fromItem;
    items[fromId] = toItem;
    this.setState({ tasks: items });
  };

  handleAdd = (target) => {
    switch (target) {
      case "tasks":
        this.setState({
          taskOptions: this.state.taskOptions.concat("新規タスク"),
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
    await this.setState({
      isStart: !currentState,
    });
    this.handleTimer();
  };
  handleTimer = async () => {
    if (this.state.isStart || this.state.isBreak) {
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
      if (this.state.isStart) {
        const lastTask = this.state.tasks[0];
        const random = Math.floor(Math.random() * this.state.treats.length);
        const treasure = this.state.treats[random];
        const treats = this.state.treats.concat();
        treats.splice(random, 1);
        await this.setState({
          lastTask,
          treasure,
          isStart: false,
          tasks: this.state.tasks.slice(1),
          treats,
          time: 0,
          second: 10,
          isBreak: true,
        });
        this.props.history.push({
          pathname: "/break",
          state: {
            tasks: this.props.tasks,
            treats: this.props.treats,
          },
        });
      } else if (this.state.isBreak) {
        await this.setState({
          isStart: true,
          isBreak: false,
          time: 0,
          second: 10,
        });
        this.props.history.push({
          pathname: "/timer",
          state: {
            tasks: this.props.tasks,
            treats: this.props.treats,
          },
        });
      }
      this.handleTimer();
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
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Task
                handleAdd={this.handleAdd}
                handleUpdate={this.handleUpdate}
                tasks={this.state.tasks}
                taskOptions={this.state.taskOptions}
                treats={this.state.treats}
                target="tasks"
                onDrop={this.onDrop}
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
                isBreak={this.state.isBreak}
              />
            )}
          />
          <Route
            exact
            path="/break"
            render={() => (
              <Break
                handleAdd={this.handleAdd}
                handleUpdate={this.handleUpdate}
                lastTask={this.state.lastTask}
                treasure={this.state.treasure}
                treats={this.state.treats}
                target={"treats"}
                time={this.state.time}
                second={this.state.second}
                isStart={this.state.isStart}
              />
            )}
          />
          <Route exact path="/dnd" render={() => <SortableList />} />
        </Switch>
        {/* <Steps tasks={this.state.tasks} treats={this.state.treats} /> */}
      </div>
    );
  }
}

export default withRouter(App);
