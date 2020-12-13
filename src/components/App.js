import React, { Component } from "react";
import Header from "./LayoutComponents/Header";
import BlockTable from "./TaskComponents/BlockComponents/BlockTable";
import TomatoTable from "./TaskComponents/TomatoComponents/TomatoTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ["新規タスク"],
    };
  }

  handleAddTask = () => {
    this.setState({
      tasks: this.state.tasks.concat("新規タスク"),
    });
  };
  handleUpdateTask = (index, value) => {
    const newTasks = this.state.tasks.map((task, loopIndex) => {
      return loopIndex === index ? value : task;
    });
    this.setState({ tasks: newTasks });
  };

  render() {
    return (
      <div className="l-main">
        <Header />
        <h2 className="p-pageTitle">今から何をしますか？</h2>
        <BlockTable
          handleAddTask={this.handleAddTask}
          handleUpdateTask={this.handleUpdateTask}
          tasks={this.state.tasks}
        />
        <TomatoTable tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
