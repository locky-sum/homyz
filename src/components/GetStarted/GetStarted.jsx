import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper" id="start">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="orangeText">Get Started With Us</span>
          <span className="primaryText">
            Subscribe to our mail to get sweet deals
          </span>
          <span className="secondaryText">Come find your home with us</span>

          <button className="button">
            <a href="mailto:Salauumarmukhtar@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
