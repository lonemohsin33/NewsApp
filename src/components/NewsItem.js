import React, { Component } from "react";

export default class NewsItem extends Component {
    render() {
      let {title, description, urlToImage,url}= this.props
    return (
      <>
        <div className="container">
          <div>
            <img
              src={urlToImage?urlToImage:"https://www.northampton.ac.uk/wp-content/uploads/2018/11/default-svp_news.jpg"}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title?title.slice(0,40):""}...</h5>
              <p className="card-text">{description?description.slice(0,80):""}</p>
              <a rel="noreferrer"href={url} target="_blank" className="btn btn-dark my-2">
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
