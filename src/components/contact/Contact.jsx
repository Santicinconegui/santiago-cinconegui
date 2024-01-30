import React from "react";
import { TbMapSearch, TbMailForward } from "react-icons/tb";
import "./contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="contact__content">
          <div className="contact__title">
            <p>CONTACT ME!</p>
            <h3>Hit me up! 👇</h3>
          </div>
          <div className="contact__icons">
            <div className="contact__icon-box">
              <span>
                <TbMapSearch />
              </span>
              <div className="contact__info">
                <h3>Location</h3>
                <p>Argentina, Buenos Aires</p>
              </div>
            </div>
            <div className="contact__icon-box">
              <span>
                <TbMailForward />
              </span>
              <div className="contact__info">
                <h3>Mail</h3>
                <a href="mailto:santiagocinconegui@gmail.com" rel="no-refer">
                  santiagocinconegui@gmail.com
                </a>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
