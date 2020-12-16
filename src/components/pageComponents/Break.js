import React, { Component } from "react";

import MiniTomato from "../TaskComponents/TomatoComponents/MiniTomato";
import TimerTomato from "../TaskComponents/TomatoComponents/TimerTomato";

class Treat extends Component {
  render() {
    let elements = (
      <React.Fragment>
        <h2 className="p-pageTitle">まだタスクを達成していません。</h2>
      </React.Fragment>
    );
    if (this.props.lastTask) {
      if (this.props.isStart) {
        elements = (
          <React.Fragment>
            <h2 className="p-pageTitle">前回達成したタスク</h2>
            <div className="p-result">
              <p className="p-result__txt">
                「{this.props.lastTask}」をして <br />「{this.props.treasure}
                」をGET!
              </p>
              <div className="p-result__content">
                <MiniTomato name="仕事" time="25" />
                <div className="p-result__treasure">
                  <img
                    className="p-result__treasure__icon"
                    src={`${process.env.PUBLIC_URL}/treasure.svg`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      } else {
        elements = (
          <React.Fragment>
            <h2 className="p-pageTitle">達成しました！</h2>
            <div className="p-result">
              <p className="p-result__txt">
                「{this.props.lastTask}」をして <br />「{this.props.treasure}
                」をGET!
              </p>
              <div className="p-result__content">
                <MiniTomato name="仕事" time="25" />
                <div className="p-result__treasure">
                  <img
                    className="p-result__treasure__icon"
                    src={`${process.env.PUBLIC_URL}/treasure.svg`}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <TimerTomato
              name="休憩時間"
              time={this.props.time}
              second={this.props.second}
            />
          </React.Fragment>
        );
      }
    }

    return <React.Fragment>{elements}</React.Fragment>;
  }
}

export default Treat;
