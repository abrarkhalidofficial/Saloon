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
          <div className="loginpage__content__heading">Welcome Back</div>
          <div className="loginpage__content__info">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </div>
          <div className="loginpage__content__form">
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="loginpage__content__form">
            <input
              type="password"
              name="text"
              id="text"
              placeholder="Password"
            />
          </div>
          <div className="loginpage__content__button">
            <button>Sign Up</button>
          </div>
          <div className="loginpage__content__forget__tag">
            <Link to="/login" href="#">
              Don’t Have an Account?{" "}
              <span className="loginpage__content__forget__tag__span">
                Sign Up
              </span>
            </Link>
          </div>
        </div>
        <div className="loginpage__right">
          <div className="loginpage__right__img">
            <img src={loginright} alt="loginright" />
          </div>
        </div>
      </section>
    </>
  );
}

export default SignIn;
