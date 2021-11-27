import React, { useState } from "react";
import "./StackHome.css";
import Header from '../nav/Header'
import Slider from "react-input-slider";
import ImageLive from "../../store/logo/img-live.jpg";

function StackHome() {
  // tab option state
  
  return (
      <>
      <Header/>
    <div className="banner">
    <div className="">
        <div class="border"></div>
        <h2>The Darjeeling Limited</h2>
        <p>by Wes Anderson</p>
        <img src={ImageLive} style={{border: "4px solid #ffffff45", width: "40%"}}/>
        <div className="border border-bottom"> </div>
    </div>
    </div>
    </>
  );
}

export default StackHome;
