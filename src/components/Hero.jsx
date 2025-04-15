import { Typewriter } from "react-simple-typewriter";
import "./Hero.css";
import cover from "../assets/cover.jpg"; 

export default function Hero() {
  return (
    <section className="hero" id="home">
      <img src={cover} alt="cover" className="cover-photo" /> 
      <div className="hero-content">
      
        <p className="tagline">Welcome to my world</p>
        <h1>
          I'm <span className="highlight">Joseph Mokua [jose santos]</span>
        </h1>
        <h2>
          <Typewriter
            words={[
              "Frontend Developer",
              "React Enthusiast",
              "UI/UX Designer",
              "Tech Explorer",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <p className="intro">
          I build sleek web experiences using clean code and cutting-edge tools.
        </p>
        <a href="#projects" className="cta-button">Explore My Work</a>
      </div>
    </section>
  );
}
