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
          description="For Confiteria Marcari, I have developed an attractive and functional website using technologies such as React and CSS, I have created a digital experience that captures the essence and charm of this iconic bakery-pastry shop in my city. The combination of modern technologies and captivating design allows visitors to explore Confiteria Marcari products and services in an immersive and attractive way.
"
          techno1="React"
          techno2="Javascript"
          techno3="CSS"
          code="https://github.com/Santicinconegui/confiteria-marcari"
          demo="https://confiteria-marcari.vercel.app/"
          scrollY="-75%"
          icon="🥐"
        />
        <ProCard
          title="Bookstore"
          date="(December 2022)"
          img={bookstore}
          description="I have developed a book ecommerce that uses an API to access a wide selection of literary titles. This project was built with React, CSS, Express, and an integration with the Stripe API. Additionally, I have implemented a registration system through Google and have taken advantage of the capabilities of Firebase to enhance the functionality of the site. The result is a robust and attractive platform that allows users to explore, buy and enjoy a wide range of books in an agile and secure way."
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
