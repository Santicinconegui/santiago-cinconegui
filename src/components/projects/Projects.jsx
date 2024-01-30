import React from "react";
import ProCard from "./ProCard";
import "./projects.css";
import marcari from "../../assets/img/marcari-confiteria.jpg";
import bookstore from "../../assets/img/bookstore.jpg";

const Projects = () => {
  return (
    <div className="containerProjects " id="Project">
      <div className="portfolio">
        <h2>PORTFOLIO</h2>
        <h3>
          Every project I have done is below. Every project I have done is below
          💻.
        </h3>
      </div>
      <div className="projectsGrid">
        <ProCard
          title="Confiteria Marcari"
          img={marcari}
          date="(August 2023)"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          techno1="React"
          techno2="Javascript"
          techno3="SCSS"
          code="https://github.com/Santicinconegui/confiteria-marcari"
          demo="https://confiteria-marcari.vercel.app/"
          scrollY="-75%"
          icon="🥐"
        />
        <ProCard
          title="Bookstore"
          date="(December 2022)"
          img={bookstore}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          techno1="React"
          techno2="Javascript"
          techno3="CSS"
          techno4="Express"
          code="https://github.com/stefvndev/coindom-crypto"
          demo="https://coindom-crypto-search.vercel.app/"
          scrollY="-79%"
          icon="📚"
          cName="reversed-proj"
        />{" "}
        {/* <ProCard
          title="Lorem Ipsum"
          date="(Lorem)"
          img={""}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          techno1="React"
          techno2="Tailwind CSS"
          code="Lorem"
          demo="vercel"
          scrollY="-89%"
          icon="🏋️"
        />
        <ProCard
          title="Lorem Ipsum"
          date="(Lorem)"
          img={""}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          techno1="React"
          techno2="Vanila CSS"
          code="Lorem"
          demo="Vercel"
          scrollY="-71%"
          icon="🛒"
          cName="reversed-proj"
        /> */}
      </div>
    </div>
  );
};

export default Projects;
