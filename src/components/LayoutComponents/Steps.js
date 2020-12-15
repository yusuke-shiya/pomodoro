import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Steps extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(path) {
    this.props.history.push({
      pathname: path,
      state: {
        tasks: this.props.tasks,
        treats: this.props.treats,
      },
    });
  }
  render() {
    return (
      <div className="p-steps">
        <div
          className="p-steps__item"
          onClick={this.handleClick.bind(null, "/")}
        >
          <img
            className="p-steps__item__img"
            src={`${process.env.PUBLIC_URL}/step1.svg`}
            alt=""
          />
        </div>
        <div
          className="p-steps__item"
          onClick={this.handleClick.bind(null, "/treat")}
        >
          <img
            className="p-steps__item__img"
            src={`${process.env.PUBLIC_URL}/step2.svg`}
            alt=""
          />
        </div>
        <div
          className="p-steps__item"
          onClick={this.handleClick.bind(null, "/timer")}
        >
          <img
            className="p-steps__item__img"
            src={`${process.env.PUBLIC_URL}/step3.svg`}
            alt=""
          />
        </div>
        <div className="p-steps__item">
          <img
            className="p-steps__item__img"
            src={`${process.env.PUBLIC_URL}/step4.svg`}
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Steps);
