import React, { Component } from "react";
import "../css/style.css";

class Intro extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          id="home"
          class="intro route bg-image"
        //   style={background-image: url(img/intro-bg.jpg)}
        >
          <div class="overlay-itro"></div>
          <div class="intro-content display-table">
            <div class="table-cell">
              <div class="container">
                <h1 class="typewriter intro-title mb-4">Anusorn Mennakred</h1>
                <p class="intro-subtitle">
                  <strong>I am </strong>
                  <span class="text-slider-items">
                    Web Designer,Frontend Developer,Graphic
                    Designer,Photographer
                  </span>
                  <strong class="text-slider"></strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Intro;
