import React from "react";
import desktop from "../../assets/img/desktop.jpeg";
import "./about.css";

const About = () => {
  return (
    <div className="containerAbout" id="About">
      <div className="img-side">
        <img src={desktop} className="img-desktop" />
      </div>
      <div className="aboutMe">
        <h2>ABOUT ME</h2>
        <br />
        <h3>web developer located in Argentina 📍.</h3>
        <p>
          As a junior web developer with solid knowledge of cutting-edge
          technologies. I am passionate about the world of web development and I
          specialize in technologies such as HTML, CSS, JavaScript, React and
          Next.js for the frontend. Additionally, I also have experience in
          backend development using MongoDB, Express, MySQL and Node.js. Since I
          discovered my passion for web development, I have been working hard to
          improve my skills and learn new technologies. I consider myself a
          self-taught person and I am always looking for new challenges to
          expand my knowledge.
        </p>
      </div>
    </div>
  );
};

export default About;
