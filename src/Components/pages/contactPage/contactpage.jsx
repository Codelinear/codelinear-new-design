import "./contactpage.scss";
import { useState, useEffect, useRef } from "react";
import America from "./images/America.svg";
import Europe from "./images/Europe.svg";
import Asia from "./images/Asia.svg";
import building from "./images/address01.jpg";
import buildingind from "./images/address02.jpg";
import gsap from "gsap";
import check from "./images/material-symbols-light_check.png";
import axios from "axios";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [time, setTime] = useState(new Date());
  const [time2, setTime2] = useState(new Date());
  const USA = useRef(null);
  const USAh1 = useRef(null);
  const India = useRef(null);
  const Indiahi = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const pacificTime = new Date().toLocaleString("en-US", {
        timeZone: "America/Los_Angeles",
      });
      setTime2(new Date(pacificTime));
    }, 1000);
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
  const hover1 = () => {
    gsap.to(India.current, { visibility: "visible" });
    gsap.to(USA.current, { visibility: "hidden" });
    gsap.to(Indiahi.current, { textDecoration: "underline" });
    gsap.to(USAh1.current, { textDecoration: "none" });
  };
  const hover2 = () => {
    gsap.to(India.current, { visibility: "hidden" });
    gsap.to(USA.current, { visibility: "visible" });
    gsap.to(Indiahi.current, { textDecoration: "none" });
    gsap.to(USAh1.current, { textDecoration: "underline" });
  };

  const [username, setUsername] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, Setmessage] = useState("");

  const fname = useRef(null);
  const lname = useRef(null);
  const Email = useRef(null);
  const alert = useRef(null);
  const alertname = useRef(null);
  const alertlname = useRef(null);
  const alert2 = useRef(null);
  const alert3 = useRef(null);
  const alertemail = useRef(null);
  const success = useRef(null);
  const havenumber = /[0-9]/.test(username);
  const havenumber1 = /[0-9]/.test(lastname);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username) {
      gsap.to(fname.current, { borderBottom: "1px solid red" });
      gsap.to(alert.current, { opacity: "1" });
      gsap.to(alertname.current, { opacity: "0" });
    }
    if (username) {
      if (havenumber) {
        gsap.to(fname.current, { borderBottom: "1px solid red" });
        gsap.to(alert.current, { opacity: "0" });
        gsap.to(alertname.current, { opacity: "1" });
      } else {
        gsap.to(fname.current, { borderBottom: "1px solid black" });
        gsap.to(alert.current, { opacity: "0" });
        gsap.to(alertname.current, { opacity: "0" });
      }
    }
    if (!lastname) {
      gsap.to(lname.current, { borderBottom: "1px solid red" });
      gsap.to(alert2.current, { opacity: "1" });
      gsap.to(alertlname.current, { opacity: "0" });
    }
    if (lastname) {
      if (havenumber1) {
        gsap.to(lname.current, { borderBottom: "1px solid red" });
        gsap.to(alert2.current, { opacity: "0" });
        gsap.to(alertlname.current, { opacity: "1" });
      } else {
        gsap.to(lname.current, { borderBottom: "1px solid black" });
        gsap.to(alert2.current, { opacity: "0" });
        gsap.to(alertlname.current, { opacity: "0" });
      }
    }
    if (!email) {
      gsap.to(Email.current, { borderBottom: "1px solid red" });
      gsap.to(alert3.current, { opacity: "1" });
      gsap.to(alertemail.current, { opacity: "0" });
    }
    if (email) {
      gsap.to(Email.current, { borderBottom: "1px solid black" });
      gsap.to(alert3.current, { opacity: "0" });
    }
    if (username && lastname && email && !havenumber && !havenumber1) {
      const data = { username, lastname, email, message };
      console.log(data);
      const response = await axios
        .post("https://codelinear-backend.onrender.com/", data)
        .then((response) => {
          if (response.status === 200) {
            gsap.to(success.current, { opacity: "1" });
            gsap.to(alertemail.current, { opacity: "0" });
            gsap.to(Email.current, { borderBottom: "1px solid black" });
          }
          console.log(response);
        })
        .catch((error) => {
          gsap.to(Email.current, { borderBottom: "1px solid red" });
          gsap.to(alertemail.current, { opacity: "1" });
          gsap.to(success.current, { opacity: "0" });
        });
    }
  };

  return (
    <>
      <Helmet>
        <title>codelinear | Let's Talk</title>
      </Helmet>
      <section className="contact-hero">
        <h1 className="contact-hero-h1">
          Let’s change the world, after a cup of coffee.
        </h1>
        <div className="contact-form">
          <form
            action="http://localhost:5000/contact"
            id="form"
            className="form relative"
          >
            <div className="form-div relative">
              <input
                type="text"
                ref={fname}
                id="fname"
                name="firstname"
                placeholder="Enter your first name"
                className="name"
                onChange={(e) => setUsername(e.target.value)}
                pattern="[A-Za-z]{1,99}"
              />
              <p
                className="absolute top-[55px] text-sm text-[red] opacity-0"
                ref={alert}
              >
                This field is mandatory!
              </p>
              <p
                className="absolute top-[55px] text-sm text-[red] opacity-0"
                ref={alertname}
              >
                This field should not have numbers!
              </p>
              <input
                type="text"
                ref={lname}
                id="lname"
                name="lastname"
                className="name"
                placeholder="Enter your last name"
                onChange={(e) => setLastname(e.target.value)}
                pattern="[A-Za-z]{1,99}"
              />
              <p
                className="absolute max-[1221px]:left-[225px] max-[681px]:left-[0] max-[680px]:top-[130px] max-lg:left-[52%] top-[55px] left-[325px] text-sm text-[red] opacity-0"
                ref={alert2}
              >
                This field is mandatory!
              </p>
              <p
                className="absolute max-[1221px]:left-[225px] max-[681px]:left-[0] max-[680px]:top-[130px] max-lg:left-[52%] top-[55px] left-[325px] text-sm text-[red] opacity-0"
                ref={alertlname}
              >
                This field should not have numbers!
              </p>
            </div>
            <input
              type="text"
              id="lname"
              ref={Email}
              name="lastname"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="email"
            />
            <p
              className="absolute max-lg:top-[190px] top-[140px] max-[681px]:top-[215px] text-sm text-[red] opacity-0"
              ref={alert3}
            >
              This field is mandatory!
            </p>
            <p
              className="absolute max-lg:top-[190px] top-[140px] max-[681px]:top-[215px] text-sm text-[red] opacity-0"
              ref={alertemail}
            >
              Enter a valid email address
            </p>
            <textarea
              id="subject"
              name="subject"
              placeholder="Your message"
              onChange={(e) => Setmessage(e.target.value)}
              className="text"
            ></textarea>
            <div className="mt-[36px] text-success flex w-[100%] max-sm:h-[121.6px] max-sm:items-start max-sm:flex-wrap gap-[20px] justify-between items-center">
              <button onClick={handleSubmit}>Submit</button>
              <div
                ref={success}
                className="max-sm:w-full bg-[#D4FFD5] text-base h-[24px] opacity-0 cursor-default rounded-[8px] w-[270px] justify-center h-[60px] flex gap-[2.25px] items-center"
              >
                <img src={check} alt="" className="w-[28.5px] h-[28.5px]" />
                Your message has been sent!
              </div>
            </div>
          </form>
        </div>
        <div className="div-time">
          <h1 className="time-h1">Our timezones</h1>
          <div className="clocks">
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
          </div>
        </div>
      </section>
      <section className="regions">
        <h1>Regions we work in</h1>
        <div className="overflo">
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
        </div>
      </section>
      <section className="address">
        <div className="address-div">
          <div className="images">
            <img src={building} alt="" ref={USA} />
            <img src={buildingind} className="img" alt="" ref={India} />
          </div>
          <div className="address-div2">
            <h1 className="address-head">Our Offices</h1>
            <div>
              <div className="max-3xl:hidden max-lg:block indiaimg">
                <img src={building} className="indiaimg" alt="" />
              </div>
              <div onMouseEnter={hover2}>
                <h1 ref={USAh1} className="USA">
                  USA
                </h1>
                <p>
                  600 B Street, Suite 300,
                  <br /> San Diego, CA 92101
                </p>
              </div>
            </div>
            <div>
              <div className="max-3xl:hidden max-lg:block indiaimg">
                <img src={buildingind} className="indiaimg" alt="" />
              </div>
              <div onMouseEnter={hover1}>
                <h1 ref={Indiahi}>India</h1>
                <p>
                  Wework Galaxy <br /> Shanthala Nagar, Ashok Nagar,
                  <br /> Bengaluru, Karnataka 560001
                </p>
              </div>
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
              <p>
                <a href="tel:+1 415 523 5957">+1 415 523 5957</a>
              </p>
            </div>
            <div>
              <h1>Write to us</h1>
              <p>
                <a href="mailto:info@codelinear.com">info@codelinear.com</a>
              </p>
            </div>
            <div>
              <h1>Career inquiry </h1>
              <p>
                <a href="mailto:info@codelinear.com">hr@codelinear.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
