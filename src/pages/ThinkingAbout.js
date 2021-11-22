import React from "react";
import Header from "../components/Header";
import Courosel from "../components/Courosel";
function ThinkingAbout() {
  return (
    <div>
      <Header />
      <div
        className="courses-intro"
        style={{ backgroundImage: `url('./thinking.svg')` }}
      >
        <div className="courses-intro-content">
          <div className="thinking" style={{ backgroundImage: `url('./another1.svg')` }} ></div>
          <Courosel />

         
        </div>
      </div>
    </div>
  );
}

export default ThinkingAbout;
