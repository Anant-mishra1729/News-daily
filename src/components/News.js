import React, { Component } from "react";
import NewItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-2">
        <div class="card bg-dark text-white">
          <img
            class="card-img"
            src="https://www.reuters.com/resizer/72oS_kjyBkx-BPqHrv9I5JHhFD4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/W2ZNKAQLPJNHVPECUTSGVTN2YE.jpg"
            alt="Card image"
            width="100px"
            height="270px"
          />
          <div class="card-img-overlay">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
