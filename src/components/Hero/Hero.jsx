import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 3, type: "spring" }}
            >
              Discover <br /> Your Ideal <br /> Space
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
            Explore our listings, envision your future, and let us guide you
            </span>
            <span className="secondaryText">
            towards discovering the ideal place you'll proudly call home.
            </span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1200} end={2000} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={17} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText">Awards & Prices</span>
            </div>
          </div>
        </div>

        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 3, type: "spring" }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default hero;
