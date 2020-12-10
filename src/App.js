import { Component } from "react";
import React from "react";

const App = () => <Counter></Counter>;

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handlePlusButton = () => this.setState({ count: this.state.count + 1 });
  handleMinusButton = () => this.setState({ count: this.state.count - 1 });
  handleMultiplyButton = () => this.setState({ count: this.state.count * 2 });
  handleDivideButton = () => this.setState({ count: this.state.count / 2 });

  render() {
    return (
      <React.Fragment>
        <div>counter: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
        <button onClick={this.handleMultiplyButton}>*2</button>
        <button onClick={this.handleDivideButton}>/2</button>
      </React.Fragment>
    );
  }
}

export default App;
