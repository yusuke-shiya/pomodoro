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
    }, 500);
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
        <div className="p-treat__content">
          <div className="p-treat__content__lid open">
            <img src={`${process.env.PUBLIC_URL}/lid.svg`} alt="" />
          </div>
          <div className="p-treat__content__itemWrapper">
            <div className="p-treat__content__item">ポッキー3本</div>
          </div>
          <div className="p-treat__content__dish">
            <img src={`${process.env.PUBLIC_URL}/dish.svg`} alt="" />
          </div>
        </div>
        <div className="p-treat__back active">
          <img src={`${process.env.PUBLIC_URL}/back.svg`} alt="" />
        </div>
      </div>
    );
  }
}

export default Treat;
