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
          <div className="signuppage__left__img">
            <img src={signuppageleft} alt="signuppageleft" />
          </div>
        </div>
        <div className="signuppage__right">
          <div className="signuppage__right__heading__img">
            <div className="signuppage__right__heading">
              Be a part of Saloon Family
            </div>
            <div className="signuppage__right__img">
              <img src={signuppageright} alt="signupright" />
            </div>
          </div>
          <div className="signuppage__right__info">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </div>
          <div className="signuppage__forms">
            <div className="signuppage__content__form">
              <input type="Text" name="Name" id="tect" placeholder="Name" />
            </div>
            <div className="signuppage__content__form">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
          </div>
          <div className="signuppage__forms">
            <div className="signuppage__content__form">
              <input type="tel" name="Phone" id="phone" placeholder="Phone" />
            </div>
            <div className="signuppage__content__form">
              <input type="text" name="text" id="text" placeholder="City" />
            </div>
          </div>
          <div className="signuppage__forms">
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
          <div className="signuppage__content__button">
            <button>Sign Up</button>
          </div>
          <div className="signuppage__content__forget__tag">
            <Link to="/signIn" href="#">
              Already Have an Account?
              <span className="signuppage__content__forget__tag__span">
                Sign Up
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default JoinNow;
