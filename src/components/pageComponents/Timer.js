import React, { Component } from "react";
import Task from "./ChildComponents/Task";
import Tomato from "./ChildComponents/Tomato";
import Treat from "./ChildComponents/Treat";
import StartStop from "../LayoutComponents/StartStop";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      treats: [],
      taskOptions: ["無題", "無題", "無題", "無題"],
      treatOptions: ["無題", "無題", "無題", "無題"],
      isStart: true,
      taskTime: 0,
      taskSecond: this.taskTime,
      treatTime: 0,
      treatSecond: this.treatTime,
      timerId: null,
      lastTask: null,
      treasure: null,
      isBreak: false,
      currentPage: 1,
    };
  }

  // タスクのタイマー
  taskTime = 15;
  // ご褒美タイマーの時間
  treatTime = 10;

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
    // タイマーが0のとき
    if (!this.state.taskTime && !this.state.taskSecond && !this.state.isBreak) {
      clearInterval(this.state.timerId);
      // タスクが終わったとき
      const lastTask = this.state.tasks[0];
      const treasure = this.state.treats[0];
      await this.setState({
        lastTask,
        treasure,
        isStart: false,
        tasks: this.state.tasks.slice(1),
        treats: this.state.treats.slice(1),
        treatTime: 0,
        treatSecond: this.treatTime,
        isBreak: true,
        currentPage: 3,
      });
      return;
    }
    if (
      !this.state.treatTime &&
      !this.state.treatSecond &&
      !this.state.isStart
    ) {
      clearInterval(this.state.timerId);
      // 休憩が終わったとき
      await this.setState({
        isStart: false,
        isBreak: false,
      });
      // 全てのタスクが終了していたら
      if (!this.state.tasks.length) {
        this.setState({
          currentPage: 1,
        });
      }
      return;
    }
    if (this.state.taskTime && !this.state.taskSecond && this.state.isStart) {
      await this.setState({
        taskTime: this.state.taskTime - 1,
        taskSecond: 59,
      });
    } else if (
      this.state.treatTime &&
      !this.state.treatSecond &&
      this.state.isBreak
    ) {
      await this.setState({
        treatTime: this.state.treatTime - 1,
        treatSecond: 59,
      });
    } else if (this.state.taskSecond && this.state.isStart) {
      await this.setState({
        taskSecond: this.state.taskSecond - 1,
      });
    } else if (this.state.treatSecond && this.state.isBreak) {
      await this.setState({
        treatSecond: this.state.treatSecond - 1,
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
            handleTimer={this.handleTimer}
            setState={this.setState.bind(this)}
          />
        </div>
        <div className="p-page__content">
          <Tomato
            handlePage={this.handlePage}
            currentTask={this.state.tasks[0]}
            time={this.state.taskTime * 60 + this.state.taskSecond}
            handleTimer={this.handleTimer}
            setState={this.setState.bind(this)}
          />
          <StartStop
            handleToggleStart={this.handleToggleStart}
            isStart={this.state.isStart}
          />
        </div>
        <div className="p-page__content">
          <Treat
            treasure={this.state.treasure}
            currentPage={this.state.currentPage}
            time={this.state.treatTime * 60 + this.state.treatSecond}
            handleTimer={this.handleTimer}
            isLast={this.state.tasks.length ? false : true}
            setState={this.setState.bind(this)}
            taskTime={this.taskTime}
          />
        </div>
      </div>
    );
  }
}

export default Timer;
