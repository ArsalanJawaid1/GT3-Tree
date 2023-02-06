import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header_container">
      <div className="header_left">
        <div className="header_text">
          <h1> Let’s Build Something amazing with GPT-3 OpenAI</h1>
        </div>
        <p className="header_para">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="header_input">
          <input type="text" placeholder="Your Email Address" />
          <button className="header_btn"> Get Started </button>
        </div>
        <div className="header_bottom">
          <img
            src="https://github.com/adrianhajdin/project_modern_ui_ux_gpt3/blob/main/src/assets/people.png?raw=true"
            alt="People"
          />
          <p> 1,600 people requested access a visit in last 24 hours </p>
        </div>
      </div>
      <div className="header_right">
        <img
          src="https://github.com/adrianhajdin/project_modern_ui_ux_gpt3/blob/main/src/assets/ai.png?raw=true"
          alt="Ai"
        />
      </div>
    </div>
  );
};

export default Header;
