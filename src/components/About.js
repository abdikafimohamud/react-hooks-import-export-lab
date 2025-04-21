import React from "react";
import { image } from "../data/user"; // Named import from user.js

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I build awesome web apps!</p>
      <img src={image} alt="User" />
    </div>
  );
}

export default About; // Default export
