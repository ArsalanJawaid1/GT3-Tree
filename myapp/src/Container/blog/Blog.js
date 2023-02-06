import React from "react";
import "./blog.css";
import Article from "../../Components/article/Article";

const Blog = () => {
  const articleData = [
    {
      date: "Sep 26,2021",
      heading: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      text: "Read Full Article",
      img : "https://github.com/adrianhajdin/project_modern_ui_ux_gpt3/blob/main/src/assets/blog02.png?raw=true",
    },
    {
      date: "Sep 26,2021",
      heading: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      text: "Read Full Article",
      img : "https://github.com/adrianhajdin/project_modern_ui_ux_gpt3/blob/main/src/assets/blog03.png?raw=true",
    },
    {
      date: "Sep 26,2021",
      heading: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      text: "Read Full Article",
      img : "https://github.com/adrianhajdin/project_modern_ui_ux_gpt3/blob/main/src/assets/blog04.png?raw=true",
    },
    {
      date: "Sep 26,2021",
      heading: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
      text: "Read Full Article",
      img : "https://github.com/adrianhajdin/project_modern_ui_ux_gpt3/blob/main/src/assets/blog05.png?raw=true"
    },
  ];
  return (
    <div className="blog_container">
      <div className="blog_top">
        <h1>
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className="blog_bottom">
        <div className="blog_bottom_left">
          <img
            src="https://github.com/adrianhajdin/project_modern_ui_ux_gpt3/blob/main/src/assets/blog01.png?raw=true"
            alt=""
          />
          <div className="blog_bottom_left_text_container">
            <div className="blog_text">
              <p>Sep 26,2021</p>
              <h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
            </div>
            <p id="blog_last_para">Read Full Article</p>
          </div>
        </div>
        <div className="blog_bottom_right">{
          articleData.map((data,index)=>(
            <Article key={index} date = {data.date} heading = {data.heading} text ={data.text} img ={data.img} />
          ))
          }</div>
      </div>
    </div>
  );
};

export default Blog;
