import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/*left*/}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Our Vision: let us guide you towards discovering the <br /> ideal
            place you'll proudly call home.
          </span>
        </div>

        {/*right*/}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">
           No21 10th str, Asokoro Garki, Abuja, Nigeria
          </span>

          <div className="flexCenter f-menu">
            <span><a href="#residencies"> Property</a></span>
            <span><a href="#residencies"> Product</a></span>
            <span><a href="#contact"> Contact</a></span>
            <span><a href="#value"> About Us</a></span>
          </div>
        </div>
      </div>

      <div
        className="flexCenter fp "
        style={{ padding: "20px 0", color: "blueviolet" }}
      >
        <p>Designed by Umar</p>
      </div>
    </section>
  );
};

export default Footer;
