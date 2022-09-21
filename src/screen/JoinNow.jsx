import { useState } from "react";
import signuppageleft from "../assets/signup-left.png";
import signuppageright from "../assets/signup-right.png";
import { Link } from "react-router-dom";

function JoinNow() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="signuppage">
        <div className="signuppage__left">
          <div
            className="signuppage__left__img"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <img src={signuppageleft} alt="signuppageleft" />
          </div>
        </div>
        <div className="signuppage__right">
          <div
            className="signuppage__right__heading__img"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <div className="signuppage__right__heading">
              Be a part of <br /> Saloon Family
            </div>
            <div className="signuppage__right__img">
              <img src={signuppageright} alt="signupright" />
            </div>
          </div>
          <div
            className="signuppage__right__info"
            data-aos="fade-up"
            data-aos-delay="70"
            data-aos-duration="1500"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </div>
          <div
            className="signuppage__forms"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1600"
          >
            <div className="signuppage__content__form">
              <input type="Text" name="Name" id="tect" placeholder="Name" />
            </div>
            <div className="signuppage__content__form">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
          </div>
          <div
            className="signuppage__forms"
            data-aos="fade-up"
            data-aos-delay="85"
            data-aos-duration="1700"
          >
            <div className="signuppage__content__form">
              <input type="tel" name="Phone" id="phone" placeholder="Phone" />
            </div>
            <div className="signuppage__content__form">
              <input type="text" name="text" id="text" placeholder="City" />
            </div>
          </div>
          <div
            className="signuppage__forms"
            data-aos="fade-up"
            data-aos-delay="90"
            data-aos-duration="1800"
          >
            <div className="signuppage__content__form">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="signuppage__content__form">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Re-Enter Password"
              />
            </div>
          </div>
          <div
            className="signuppage__content__button"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1900"
          >
            <button>Sign Up</button>
          </div>
          <div
            className="signuppage__content__forget__tag"
            data-aos="fade-up"
            data-aos-delay="110"
            data-aos-duration="2000"
          >
            <Link to="/signIn" href="#">
              Already Have an Account?
              <span className="signuppage__content__forget__tag__span">
                Sign In
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default JoinNow;
