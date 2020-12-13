import React, { Component } from "react";

import BlockTable from "../TaskComponents/BlockComponents/BlockTable";
import TomatoTable from "../TaskComponents/TomatoComponents/TomatoTable";

class Treat extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 className="p-pageTitle">ごほうびを選んでください</h2>
        <BlockTable
          handleAdd={this.props.handleAdd}
          handleUpdate={this.props.handleUpdate}
          data={this.props.treats}
          target={this.props.target}
        />
        <TomatoTable tasks={this.props.tasks} />
      </React.Fragment>
    );
  }
}

export default Treat;
