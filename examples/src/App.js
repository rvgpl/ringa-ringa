import React, { Component } from "react";
import "@rvgpl/ringa-ringa/build/carousel.css";
import { Carousel } from "@rvgpl/ringa-ringa";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Image Carousel</h2>
        <Carousel>
          <div className="image-slide">
            <img
              src="https://images.unsplash.com/photo-1516692935701-4f35bff8b9f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e8b07db9ad1b8626288bbbf77471558&auto=format&fit=crop&w=1950&q=80"
              alt="random photo"
            />
          </div>
          <div className="image-slide">
            <img
              src="https://images.unsplash.com/photo-1533435678437-116975b59869?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=504ebc0ae846a334de634e5bdfce8f2a&auto=format&fit=crop&w=1000&q=80"
              alt="random photo"
            />
          </div>
          <div className="image-slide">
            <img
              src="https://images.unsplash.com/photo-1533428558425-bd61ad510c19?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5d19eef10401ec87e7514f08f66f6a2a&auto=format&fit=crop&w=1900&q=80"
              alt="random photo"
            />
          </div>
          <div className="image-slide">
            <img
              src="https://images.unsplash.com/photo-1533414417583-f0ab99151186?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9d51581db2684ded44ce707c3b86fc5c&auto=format&fit=crop&w=1950&q=80"
              alt="random photo"
            />
          </div>
          <div className="image-slide">
            <img
              src="https://images.unsplash.com/photo-1533395220372-38275b03d954?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e209a366794ead812b01f6be97e09a56&auto=format&fit=crop&w=1950&q=80"
              alt="random photo"
            />
          </div>
        </Carousel>
        <h2>Image Carousel in a Grid</h2>
        <div className="image-slider-grid">
          <Carousel className=" image-slider">
            <div className="image-slide">
              <img
                src="https://images.unsplash.com/photo-1516692935701-4f35bff8b9f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e8b07db9ad1b8626288bbbf77471558&auto=format&fit=crop&w=1950&q=80"
                alt="random photo"
              />
            </div>
            <div className="image-slide">
              <img
                src="https://images.unsplash.com/photo-1533435678437-116975b59869?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=504ebc0ae846a334de634e5bdfce8f2a&auto=format&fit=crop&w=1000&q=80"
                alt="random photo"
              />
            </div>
            <div className="image-slide">
              <img
                src="https://images.unsplash.com/photo-1533428558425-bd61ad510c19?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5d19eef10401ec87e7514f08f66f6a2a&auto=format&fit=crop&w=1900&q=80"
                alt="random photo"
              />
            </div>
            <div className="image-slide">
              <img
                src="https://images.unsplash.com/photo-1533414417583-f0ab99151186?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9d51581db2684ded44ce707c3b86fc5c&auto=format&fit=crop&w=1950&q=80"
                alt="random photo"
              />
            </div>
            <div className="image-slide">
              <img
                src="https://images.unsplash.com/photo-1533395220372-38275b03d954?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e209a366794ead812b01f6be97e09a56&auto=format&fit=crop&w=1950&q=80"
                alt="random photo"
              />
            </div>
          </Carousel>
          <div className="image-slider-grid-item" />
        </div>
        <h2>Infinite/Cyclic Carousel</h2>
        <Carousel infinite={true}>
          <div className="image-slide">
            <img
              src="https://images.unsplash.com/photo-1516692935701-4f35bff8b9f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e8b07db9ad1b8626288bbbf77471558&auto=format&fit=crop&w=1950&q=80"
              alt="random photo"
            />
          </div>
          <div className="image-slide">
            <img
              src="https://images.unsplash.com/photo-1533435678437-116975b59869?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=504ebc0ae846a334de634e5bdfce8f2a&auto=format&fit=crop&w=1000&q=80"
              alt="random photo"
            />
          </div>
          <div className="image-slide">
            <img
              src="https://images.unsplash.com/photo-1533428558425-bd61ad510c19?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5d19eef10401ec87e7514f08f66f6a2a&auto=format&fit=crop&w=1900&q=80"
              alt="random photo"
            />
          </div>
          <div className="image-slide">
            <img
              src="https://images.unsplash.com/photo-1533414417583-f0ab99151186?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9d51581db2684ded44ce707c3b86fc5c&auto=format&fit=crop&w=1950&q=80"
              alt="random photo"
            />
          </div>
          <div className="image-slide">
            <img
              src="https://images.unsplash.com/photo-1533395220372-38275b03d954?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e209a366794ead812b01f6be97e09a56&auto=format&fit=crop&w=1950&q=80"
              alt="random photo"
            />
          </div>
        </Carousel>
        <h2>Auto Play Infinite Carousel</h2>
        <Carousel autoPlay={true} infinite={true}>
          <div className="image-slide">
            <img
              src="https://images.unsplash.com/photo-1516692935701-4f35bff8b9f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e8b07db9ad1b8626288bbbf77471558&auto=format&fit=crop&w=1950&q=80"
              alt="random photo"
            />
          </div>
          <div className="image-slide">
            <img
              src="https://images.unsplash.com/photo-1533435678437-116975b59869?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=504ebc0ae846a334de634e5bdfce8f2a&auto=format&fit=crop&w=1000&q=80"
              alt="random photo"
            />
          </div>
          <div className="image-slide">
            <img
              src="https://images.unsplash.com/photo-1533428558425-bd61ad510c19?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5d19eef10401ec87e7514f08f66f6a2a&auto=format&fit=crop&w=1900&q=80"
              alt="random photo"
            />
          </div>
          <div className="image-slide">
            <img
              src="https://images.unsplash.com/photo-1533414417583-f0ab99151186?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9d51581db2684ded44ce707c3b86fc5c&auto=format&fit=crop&w=1950&q=80"
              alt="random photo"
            />
          </div>
          <div className="image-slide">
            <img
              src="https://images.unsplash.com/photo-1533395220372-38275b03d954?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e209a366794ead812b01f6be97e09a56&auto=format&fit=crop&w=1950&q=80"
              alt="random photo"
            />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default App;
