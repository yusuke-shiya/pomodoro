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
  backPage = () => {
    this.props.setState({ currentPage: 2, taskSecond: this.props.taskTime });
  };
  componentDidUpdate(prevProps) {
    // currentPageが3の時だけ走らせる
    if (prevProps.currentPage !== this.props.currentPage) {
      if (this.props.currentPage === 3) {
        const lid = document.getElementById("js-openLid");
        lid.classList.add("open");
        setTimeout(() => {
          this.props.handleTimer();
          this.animateBackground();
        }, this.transition);
      } else {
        const lid = document.getElementById("js-openLid");
        const backButton = document.getElementById("js-backButton");
        lid.classList.remove("open");
        backButton.classList.remove("active");
      }
    }
    // timeが0のときだけ走らせる
    if (
      this.props.currentPage === 3 &&
      this.props.time === 0 &&
      !this.props.isLast
    ) {
      const backButton = document.getElementById("js-backButton");
      backButton.classList.add("active");
    }
  }
  initialTime = this.props.time;
  transition = 2000;
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
          <div
            id="js-openLid"
            className="p-treat__content__lid"
            style={{ transition: this.transition + "ms" }}
          >
            <img src={`${process.env.PUBLIC_URL}/lid.svg`} alt="" />
          </div>
          <div id="js-measure" className="p-treat__content__itemWrapper">
            <div
              className="p-treat__content__itemEater"
              style={{
                width: `calc(${(this.props.time / this.initialTime) * 100}%)`,
              }}
            >
              <div className="p-treat__content__item">
                {this.props.treasure}
              </div>
            </div>
          </div>
          <div className="p-treat__content__dish">
            <img src={`${process.env.PUBLIC_URL}/dish.svg`} alt="" />
          </div>
        </div>
        <div
          id="js-backButton"
          className="p-treat__back"
          onClick={this.backPage}
        >
          <img src={`${process.env.PUBLIC_URL}/back.svg`} alt="" />
        </div>
      </div>
    );
  }
}

export default Treat;
