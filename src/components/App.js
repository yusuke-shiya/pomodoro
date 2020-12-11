import { Component } from "react";
import React from "react";
import { connect } from "react-redux";

import { increment, decrement } from "../actions";

class App extends Component {
  handleMultiplyButton = () => this.setState({ count: this.state.count * 2 });
  handleDivideButton = () => this.setState({ count: this.state.count / 2 });

  render() {
    const props = this.props;

    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
        <button onClick={this.handleMultiplyButton}>*2</button>
        <button onClick={this.handleDivideButton}>/2</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ value: state.count.value });
// const mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// });
const mapDispatchToProps = { increment, decrement };

export default connect(mapStateToProps, mapDispatchToProps)(App);
