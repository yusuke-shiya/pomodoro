import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Header from "./LayoutComponents/Header";
import Timer from "./pageComponents/Timer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="l-main">
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Timer />} />
        </Switch>
        {/* <Steps tasks={this.state.tasks} treats={this.state.treats} /> */}
      </div>
    );
  }
}

export default withRouter(App);
