import "./Hero.css";
import React from "react";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-input">
        <input type="text" placeholder="Add your activity" />
      </div>
      <div className="type-dropdown">
        <select name="" id="">
          <option value="">Expenses</option>
          <option value="">Interview</option>
          <option value="">Project</option>
          <option value="">Expenses</option>
          <option value="">Other</option>
        </select>
      </div>
      <div className='hero-btn'>
     Add

      </div>
      {/* <div className="dropdown">
        <button className="dropbtn">Left</button>
        <div className="dropdown-content">
          <a>Link 1</a>
          <a>Link 2</a>
          <a>Link 3</a>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
