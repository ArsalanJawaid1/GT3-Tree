import React from "react";
import "./article.css";

const Article = (props) => {
  return (
    <div className="article_container">
      <div className="articleA">
        <div className="aticle_img">
          <img src={props.img} alt="" />
          <div className="article_text_container">
            <div className="article_text">
              <p>{props.date}</p>
              <h2>{props.heading}</h2>
              <p>{props.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
