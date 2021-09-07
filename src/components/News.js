import React, { Component } from "react";
import NewItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div>
        <div className="container my-3 mx-0">
          <h2>Top Headlines</h2>
          <div className="row">
            <div className="col-md-4 my-2">
              <NewItem title="News title" desc="mydesc" />
            </div>
            <div className="col-md-4 my-2">
              <NewItem title="News title" desc="mydesc" />
            </div>
            <div className="col-md-4 my-2">
              <NewItem title="News title" desc="mydesc" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <NewItem title="News title" desc="mydesc" />
            </div>
            <div className="col-md-4">
              <NewItem title="News title" desc="mydesc" />
            </div>
            <div className="col-md-4">
              <NewItem title="News title" desc="mydesc" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
