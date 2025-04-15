import React from "react";
import "./About.css";
import profileImg from "../assets/profile.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <img src={profileImg} alt="Profile" className="about-img" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
          I specialize in <strong>React</strong>, and I'm constantly exploring new
          tools and techniques to improve my craft. Whether it’s building professional and interactive
          interfaces, experimenting with animations, or diving into backend APIs,
          I love pushing the boundaries of what’s possible on the web and software development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
