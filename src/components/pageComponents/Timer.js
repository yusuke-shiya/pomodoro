import React, { Component } from "react";
import Task from "./ChildComponents/Task";
import Tomato from "./ChildComponents/Tomato";
import StartStop from "../LayoutComponents/StartStop";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      treats: [],
      taskOptions: ["無題", "無題", "無題", "無題"],
      treatOptions: ["無題", "無題", "無題", "無題"],
      isStart: false,
      time: 0,
      second: 30,
      timerId: null,
      lastTask: null,
      treasure: null,
      isBreak: false,
      currentPage: 1,
    };
  }

  onDrop = (toId, fromId, target) => {
    const items = this.state[target];
    const toItem = items[toId];
    const fromItem = items[fromId];
    items[toId] = fromItem;
    items[fromId] = toItem;

    switch (target) {
      case "taskOptions":
        this.setState({ taskOptions: items });
        break;
      case "treatOptions":
        this.setState({ treatOptions: items });
        break;
      default:
        break;
    }
  };

  onDropAdd = (name, target) => {
    const items = this.state[target];
    items.push(name);

    switch (target) {
      case "tasks":
        this.setState({ tasks: items });
        break;
      case "treats":
        this.setState({ treats: items });
        break;
      default:
        break;
    }
  };
  handleRemove = (target, index) => {
    const state = this.state[target];
    state.splice(index, 1);
    switch (target) {
      case "tasks":
        this.setState({
          tasks: state,
        });
        break;
      case "treats":
        this.setState({
          treats: state,
        });
        break;
      default:
        break;
    }
  };
  handleShuffle = () => {
    const tasks = this.state.tasks;
    const treats = this.state.treats;

    if (!tasks.length || !treats.length) {
      return;
    }

    for (let i = tasks.length; 1 < i; i--) {
      const random = Math.floor(Math.random() * i);
      [tasks[random], tasks[i - 1]] = [tasks[i - 1], tasks[random]];
    }
    for (let i = treats.length; 1 < i; i--) {
      const random = Math.floor(Math.random() * i);
      [treats[random], treats[i - 1]] = [treats[i - 1], treats[random]];
    }

    this.setState({
      tasks,
      treats,
    });
  };
  handleUpdate = (target, index, value) => {
    const newState = this.state[target].map((task, loopIndex) => {
      return loopIndex === index ? value : task;
    });
    switch (target) {
      case "taskOptions":
        this.setState({
          taskOptions: newState,
        });
        break;
      case "treatOptions":
        this.setState({
          treatOptions: newState,
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
          currentPage: 3,
        });
      } else if (this.state.isBreak) {
        // await this.setState({
        //   isStart: true,
        //   isBreak: false,
        //   time: 0,
        //   second: 10,
        // });
        // this.props.history.push({
        //   pathname: "/timer",
        //   state: {
        //     tasks: this.props.tasks,
        //     treats: this.props.treats,
        //   },
        // });
      }
      // this.handleTimer();
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

  handlePage = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div
        className="p-page"
        style={{
          transform: `translateX(${-(this.state.currentPage - 1) * 100}%)`,
        }}
      >
        <div className="p-page__content">
          <Task
            handleRemove={this.handleRemove}
            handleUpdate={this.handleUpdate}
            handleShuffle={this.handleShuffle}
            tasks={this.state.tasks}
            taskOptions={this.state.taskOptions}
            treats={this.state.treats}
            treatOptions={this.state.treatOptions}
            onDrop={this.onDrop}
            onDropAdd={this.onDropAdd}
            handlePage={this.handlePage}
          />
        </div>
        <div className="p-page__content">
          <Tomato
            handlePage={this.handlePage}
            currentTask={this.state.tasks[0]}
            time={this.state.time * 60 + this.state.second}
          />
          <StartStop
            handleToggleStart={this.handleToggleStart}
            isStart={this.state.isStart}
          />
        </div>
        <div className="p-page__content">ごほうびページ</div>
      </div>
    );
  }
}

export default Timer;
