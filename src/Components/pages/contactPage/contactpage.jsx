import "./contactpage.scss";
import { useState, useEffect } from "react";
import America from "./images/America.svg";
import Europe from "./images/Europe.svg";
import Asia from "./images/Asia.svg";
import building from "./images/building.svg";

const Contact = () => {
  const [time, setTime] = useState(new Date());
  const [time2, setTime2] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Use the time zone for Pacific Time
      const pacificTime = new Date().toLocaleString("en-US", {
        timeZone: "America/Los_Angeles",
      });
      setTime2(new Date(pacificTime));
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const hoursp = time2.getHours();
  const minutesp = time2.getMinutes();
  const secondsp = time2.getSeconds();

  const hourAngle = (360 / 12) * (hours % 12) + (360 / 12) * (minutes / 60);
  const minuteAngle = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
  const secondAngle = (360 / 60) * seconds;
  const hourAnglep = (360 / 12) * (hoursp % 12) + (360 / 12) * (minutesp / 60);
  const minuteAnglep = (360 / 60) * minutesp + (360 / 60) * (secondsp / 60);
  const secondAnglep = (360 / 60) * secondsp;

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const formattedTime2 = time.toLocaleTimeString([], {
    timeZone: "America/Los_Angeles",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const transformHourStyle = {
    transform: `rotate(${hourAngle}deg)`,
    transformOrigin: "bottom center",
  };

  const transformMinuteStyle = {
    transform: `rotate(${minuteAngle}deg)`,
    transformOrigin: "bottom center",
  };
  const transformSecondStyle = {
    transform: `rotate(${secondAngle}deg)`,
    transformOrigin: "bottom center",
  };
  const transformHourStylep = {
    transform: `rotate(${hourAnglep}deg)`,
    transformOrigin: "bottom center",
  };

  const transformMinuteStylep = {
    transform: `rotate(${minuteAnglep}deg)`,
    transformOrigin: "bottom center",
  };
  const transformSecondStylep = {
    transform: `rotate(${secondAnglep}deg)`,
    transformOrigin: "bottom center",
  };
  return (
    <>
      <section className="contact-hero">
        <h1 className="contact-hero-h1">
          Let’s change the world, after a cup of coffee.
        </h1>
        <div className="contact-form">
          <form action="" className="form">
            <div className="form-div">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Enter your first name"
                className="name"
              />
              <input
                type="text"
                id="lname"
                name="lastname"
                className="name"
                placeholder="Enter your last name"
              />
            </div>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Enter your email"
              className="email"
            />
            <textarea
              id="subject"
              name="subject"
              placeholder="Your message"
              className="text"
            ></textarea>
          </form>
          <button>Submit</button>
        </div>
        <div className="div-time">
          <h1 className="time-h1">Our timezones</h1>
          <div className="clocks">
            <div className="time-zones">
              <div className="analog-clock">
                <div className="hand hour" style={transformHourStyle}></div>
                <div
                  className="hand minute"
                  style={transformMinuteStyle}
                ></div>{" "}
                <div className="hand second" style={transformSecondStyle}></div>
              </div>
              <div className="digital-clock">
                <h1>{formattedTime}</h1>
                <p>Indian Standard Time</p>
              </div>
            </div>
            <div className="time-zones">
              <div className="analog-clock">
                <div className="hand hour" style={transformHourStylep}></div>
                <div
                  className="hand minute"
                  style={transformMinuteStylep}
                ></div>{" "}
                <div
                  className="hand second"
                  style={transformSecondStylep}
                ></div>
              </div>
              <div className="digital-clock">
                <h1>{formattedTime2}</h1>
                <p>Pacific Time Zone</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="regions">
        <h1>Regions we work in</h1>
        <div className="working-areas">
          <div>
            <img src={America} alt="" />
            <p>Americas</p>
          </div>
          <div>
            <img src={Europe} alt="" />
            <p>EMEA</p>
          </div>
          <div>
            <img src={Asia} alt="" />
            <p>Asia Pacific</p>
          </div>
        </div>
      </section>
      <section className="address">
        <div className="address-div">
          <img src={building} alt="" />
          <div className="address-div2">
            <h1 className="address-head">Our Offices</h1>
            <div>
              <h1>USA</h1>
              <p>600 B Street, Suite 300,<br /> San Diego, CA 92101</p>
            </div>
            <div>
              <h1>India</h1>
              <p>
                Wework Galaxy <br /> Shanthala Nagar, Ashok Nagar,<br /> Bengaluru, Karnataka
                560001
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="our-contact">
        <div className="contacts-info">
          <h1 className="contact-head">Our Contacts</h1>
          <div className="contact-details">
            <div>
              <h1>Call us</h1>
              <p>+1 415 523 5957</p>
            </div>
            <div>
              <h1>Write to us</h1>
              <p>info@codelinear.com</p>
            </div>
            <div>
              <h1>Career inquiry </h1>
              <p>hr@codelinear.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
