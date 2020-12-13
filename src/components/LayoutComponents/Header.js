import React, { Component } from "react";
import Hamburger from "./Hamburger";

class Header extends Component {
  render() {
    return (
      <div className="l-header">
        <h1 className="l-header__title">アプリ名</h1>
        <div className="l-header__right">
          <Hamburger />
        </div>
      </div>
    );
  }
}

export default Header;
