import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./LayoutComponents/Header";
import Task from "./pageComponents/Task";
import Treat from "./pageComponents/Treat";
import Steps from "./LayoutComponents/Steps";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ["新規タスク"],
      treats: ["ごほうび"],
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
          </Switch>
          <Steps tasks={this.state.tasks} props={this.state.treats} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
