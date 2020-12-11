import React, { Component } from "react";
import Header from "./LayoutComponents/Header";
import BlockTable from "./BlockComponents/BlockTable";
import TomatoTable from "./TomatoComponents/TomatoTable";

class App extends Component {
  render() {
    return (
      <div className="l-main">
        <Header />
        <h2 className="p-pageTitle">今から何をしますか？</h2>
        <BlockTable />
        <TomatoTable />
      </div>
    );
  }
}

export default App;
