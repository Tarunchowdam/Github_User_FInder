import React from "react";
import "./Logo.css"; // Import the CSS file

const Logo = () => {
  return (
    <div className="logoContainer">
      <img
        src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"
        className="logoImage"
        alt="GitHub Logo"
      />
      <h1 className="logoText">GitHub User Finder</h1>
    </div>
  );
};

export default Logo;
