import React from "react";
import "./Technologies.css";
import html5 from "./html5.svg";
import css3 from "./css.svg";
import reactjs from "./react.svg";

function Technologies() {
  return (
    <div>
      <div className="container">
        <h2>Front End Technologies</h2>
        <div className="images">
          <img src={html5} alt="HTML5"></img>
          <img src={css3} alt="CSS3"></img>
          <img src={reactjs} alt="ReactJS"></img>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
