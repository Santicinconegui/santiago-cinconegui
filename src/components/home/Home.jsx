import React from "react";
import hi from "../../assets/img/hi.png";
import "./home.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Home = () => {
  const skillsIconsFront = [
    {
      img: "https://skillicons.dev/icons?i=html,css",
      id: 1,
    },
    {
      img: "https://skillicons.dev/icons?i=js,ts",
      id: 2,
    },
    {
      img: "https://skillicons.dev/icons?i=react,next",
      id: 3,
    },
    {
      img: "https://skillicons.dev/icons?i=bootstrap,scss",
      id: 4,
    },
  ];
  const skillsIconsBack = [
    {
      img: "https://skillicons.dev/icons?i=express,nodejs",
      id: 1,
    },
    {
      img: "https://skillicons.dev/icons?i=mongodb,mysql",
      id: 2,
    },
  ];
  return (
    <div className="sett">
      <div className="container" id="home">
        <div className="subContainer">
          <h1>
            Web Developer <img src={hi} alt="hi" className="hi" />
          </h1>
          <p>
            Hi, I'm Santiago Cinconegui, Web developer. I am a frontend and
            backend enthusiast. based in Argentina, Buenos Aires 📍.
          </p>
          <div className="social">
            <span>
              <FaLinkedinIn />
            </span>
            <span>
              <FaGithub />
            </span>
          </div>
        </div>
        <div className="content__img"></div>
      </div>
      <div className="skills" translate="no">
        <p>Frontend Stack</p>
        <div className="logos">
          <ul>
            {skillsIconsFront.map((icon) => (
              <li key={icon.id}>
                <img src={icon.img} alt="skill-icon" />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="skillsBackend" translate="no">
        <p>Backend Stack</p>
        <div className="logos">
          <ul>
            {skillsIconsBack.map((icon) => (
              <li key={icon.id}>
                <img src={icon.img} alt="skill-icon" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
