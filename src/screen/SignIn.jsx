import { useState } from "react";
import loginpageleft from "../assets/login-left.png";
import loginright from "../assets/login-right.png";
import { Link } from "react-router-dom";

function SignIn() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="loginpage">
        <div className="loginpage__left">
          <div className="loginpage__left__img">
            <img src={loginpageleft} alt="loginpageleft" />
          </div>
        </div>
        <div className="loginpage__content">
          <div
            className="loginpage__content__heading"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            Welcome Back
          </div>
          <div
            className="loginpage__content__info"
            data-aos="fade-up"
            data-aos-delay="70"
            data-aos-duration="1500"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </div>
          <div
            className="loginpage__content__form"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1600"
          >
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div
            className="loginpage__content__form"
            data-aos="fade-up"
            data-aos-delay="90"
            data-aos-duration="1700"
          >
            <input
              type="password"
              name="text"
              id="text"
              placeholder="Password"
            />
          </div>
          <div
            className="loginpage__content__button"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1800"
          >
            <button>Sign Up</button>
          </div>
          <div
            className="loginpage__content__forget__tag"
            data-aos="fade-up"
            data-aos-delay="110"
            data-aos-duration="1900"
          >
            <Link to="/login" href="#">
              Don’t Have an Account?{" "}
              <span className="loginpage__content__forget__tag__span">
                Sign Up
              </span>
            </Link>
          </div>
        </div>
        <div className="loginpage__right">
          <div
            className="loginpage__right__img"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <img src={loginright} alt="loginright" />
          </div>
        </div>
      </section>
    </>
  );
}

export default SignIn;
