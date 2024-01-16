import React from "react";
import "./Contact.css";
import { MdCall, MdChat, MdChatBubble } from "react-icons/md";

const Contact = () => {
  return (
    <section className="con-wrapper" id="contact">
      <div className="paddings innerWidth flexCenter con-container">
        <div className="flexColStart con-left">
          <span className="orangeText">Our Contact</span>
          <span className="primaryText">Reach out to us</span>
          <span className="secondaryText">
            Your inquiries matter. Reach out to us effortlessly, and let our
            dedicated team guide you through every step of your real estate
            journey.
          </span>

          <div className="flexColStart contactModes">
            {/*first row*/}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">+234 902 015 1627</span>
                  </div>
                </div>

                <div className="flexCenter button">Call Now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdChat size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">+234 902 015 1627</span>
                  </div>
                </div>

                <div className="flexCenter button">Chat With Us </div>
              </div>
            </div>

            {/*Second row*/}

            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">+234 902 015 1627</span>
                  </div>
                </div>

                <div className="flexCenter button">Skype Now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdChat size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Email</span>
                    <span className="secondaryText">
                      Salauumarmukhtar@gmail.com
                    </span>
                  </div>
                </div>

                <div className="flexCenter button">Mail Us</div>
              </div>
            </div>
          </div>
        </div>

        <div className="con-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
