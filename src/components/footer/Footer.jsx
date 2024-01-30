import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

import "./footer.css";

const footer = () => {
  return (
    <footer>
      <div className="containerFooter">
        <div className="footerc">
          <h3>
            Copyright © {new Date().getFullYear()}. All rights are reserved
          </h3>
          <div className="footerc__socials">
            <a
              aria-label="linkedin"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/santiago-cinconegui/">
              <FiLinkedin width={30} height={30} />
            </a>
            <a
              aria-label="github"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/santicinconegui">
              <FiGithub width={20} height={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
