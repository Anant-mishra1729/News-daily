import React, { Component } from "react";

export class Newscarousle extends Component {
  render() {
    return (
      <div className="container my-2">
        <div class="carousel-item">
          <img
            src="https://i.cbc.ca/1.6166492.1630994511!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/1338803105.jpg"
            alt="Img"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Hello </h5>
            <p>World</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Newscarousle;
