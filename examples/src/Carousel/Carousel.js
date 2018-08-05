import React, { Component, Children, Fragment } from "react";
import classNames from "classnames";
import "./Carousel.css";

const NextButtonComponent = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 1792 1792"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
      fill="#fff"
    />
  </svg>
);

const PrevButtonComponent = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 1792 1792"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"
      fill="#fff"
    />
  </svg>
);

class Carousel extends Component {
  constructor(props) {
    super(props);
    const { defaultActiveItem } = props;
    this.state = {
      activeItem: defaultActiveItem != null ? defaultActiveItem : 1
    };
    this.isPaused = false;
  }

  handleIndicatorClick = index => this.setState({ activeItem: index });

  handlePrev = () =>
    this.setState(prevState => {
      return {
        activeItem: prevState.activeItem === 1 ? 1 : prevState.activeItem - 1
      };
    });

  handleNext = () => {
    const totalCarouselItems = Children.count(this.props.children);
    this.setState(prevState => {
      return {
        activeItem:
          prevState.activeItem === totalCarouselItems
            ? this.props.infinite
              ? 1
              : totalCarouselItems
            : prevState.activeItem + 1
      };
    });
  };

  getActiveItem = () => {
    const activeItemProp = this.props.activeItem;
    return activeItemProp != null ? activeItemProp : this.state.activeItem;
  };

  componentDidMount() {
    if (this.props.autoPlay) {
      this.play();
    }
  }

  handleMouseOut = () => {
    if (this.isPaused) {
      this.play();
    }
  };

  handleMouseOver = () => {
    if (this.props.pauseOnHover) {
      this.pause();
    }
  };

  play = () => {
    this.isPaused = false;
    const { interval } = this.props;
    this.timeout = setInterval(this.handleNext, interval);
  };

  pause = () => {
    this.isPaused = true;
    clearInterval(this.timeout);
  };

  render() {
    const carouselItems = this.props.children.map((slide, index) => {
      const carouselItemClasses = classNames(
        "carousel-item",
        {
          active: this.getActiveItem() === index + 1
        },
        {
          "carousel-item-prev": this.getActiveItem() - 1 === index + 1
        },
        {
          "carousel-item-next": this.getActiveItem() + 1 === index + 1
        }
      );

      return (
        <div key={index} className={carouselItemClasses}>
          {slide}
        </div>
      );
    });

    return (
      <div
        className={`carousel ${this.props.className}`}
        onMouseOver={this.props.autoPlay ? this.handleMouseOver : null}
        onMouseOut={this.props.autoPlay ? this.handleMouseOut : null}
      >
        <div className="carousel-inner">{carouselItems}</div>

        {this.props.showControls && (
          <Fragment>
            <div className="button prev" onClick={() => this.handlePrev()}>
              {this.props.prevButtonComponent}
              <span className="screen-reader-only">
                {this.props.prevButtonLabel}
              </span>
            </div>
            <div className="button next" onClick={() => this.handleNext()}>
              {this.props.nextButtonComponent}
              <span className="screen-reader-only">
                {this.props.nextButtonLabel}
              </span>
            </div>
          </Fragment>
        )}
        {this.props.showIndicators && (
          <ol className="carousel-indicators">
            {this.props.children.map((item, index) => (
              <li
                onClick={() => this.handleIndicatorClick(index + 1)}
                className={this.getActiveItem() === index + 1 ? "active" : ""}
              >
                {index + 1}
              </li>
            ))}
          </ol>
        )}
      </div>
    );
  }
}

export default Carousel;

Carousel.defaultProps = {
  interval: 3000,
  pauseOnHover: true,
  autoPlay: false,
  direction: "ltr",
  prevButtonLabel: "Previous",
  nextButtonLabel: "Next",
  showControls: true,
  prevButtonComponent: <PrevButtonComponent />,
  nextButtonComponent: <NextButtonComponent />,
  infinite: false,
  showIndicators: true
};
