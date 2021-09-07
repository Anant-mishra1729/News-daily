import React, { Component } from "react";

export class NewItem extends Component {
  render() {
    let { title, desc } = this.props;

    return (
      <div>
        <div className="card" style={{ width: "20rem" }}>
          <img
            src="https://www.reuters.com/resizer/72oS_kjyBkx-BPqHrv9I5JHhFD4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/W2ZNKAQLPJNHVPECUTSGVTN2YE.jpg"
            className="card-img-top"
            alt="The image"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewItem;
