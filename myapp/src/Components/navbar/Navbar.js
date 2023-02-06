import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="navbar-logo">
        <img
          src="https://github.com/adrianhajdin/project_modern_ui_ux_gpt3/blob/main/src/assets/logo.svg?raw=true"
          alt="logo"
        />
      </div>
      <div className="navbar_links">
        <ul>
          <li>Home</li>
          <li>What is GPT3</li>
          <li>Open AI</li>
          <li>Case Studies</li>
          <li>Library</li>
        </ul>
      </div>
      <div className="navbar_sign">
        <p>sign in </p>
        <button> Sign up</button>
      </div>
      
    </div>
  );
};

export default Navbar;
