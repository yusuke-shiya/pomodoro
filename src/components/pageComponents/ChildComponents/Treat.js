import React, { Component } from "react";

class Treat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: 0,
    };
  }
  animateBackground = () => {
    const animateInterval = setInterval(() => {
      if (this.props.currentPage === 3) {
        this.setState({ background: !this.state.background });
      } else {
        clearInterval(animateInterval);
      }
    }, 300);
  };
  componentDidMount() {
    this.animateBackground();
  }
  render() {
    return (
      <div className="p-treat">
        <div className="p-treat__background">
          <img
            src={`${process.env.PUBLIC_URL}/background-1.svg`}
            alt=""
            style={{ opacity: `${this.state.background ? 0 : 1}` }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/background-2.svg`}
            alt=""
            style={{ opacity: `${this.state.background ? 1 : 0}` }}
          />
        </div>
      </div>
    );
  }
}

export default Treat;
