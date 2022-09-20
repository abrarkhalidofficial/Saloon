import { useState } from "react";
import discoverleft from "../assets/discover-left.png";
import discovercontent from "../assets/discover-content.png";
import discoverright from "../assets/discover-right.png";
import atmosphereleft from "../assets/atmosphere-left.png";
import atmosphereright from "../assets/atmosphere-right.png";
import atmospherecontent from "../assets/atmosphere-content.png";
import service from "../assets/services.png";
import loginpageleft from "../assets/login-left.png";
import loginright from "../assets/login-right.png";
import signuppageleft from "../assets/signup-left.png";
import signuppageright from "../assets/signup-right.png";

function Home() {
  return (
    <>
      <section className="discover__Section">
        <div className="discover__left">
          <div className="discover__left__img">
            <img src={discoverleft} alt="discover__left" />
          </div>
        </div>
        <div className="discover__content">
          <div className="discover__content__img">
            <img src={discovercontent} alt="discover__content" />
          </div>
          <div className="discover__content__heading__and__info">
            <div className="discover__content__heading">
              Discover the Gorgeous Shine Within Us
            </div>
            <div className="discover__content__info">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
            <div className="discover__content__button">
              <a href="#">Book Your Appointmnet</a>
            </div>
          </div>
        </div>
        <div className="discover__right">
          <div className="discover__right__img">
            <img src={discoverright} alt="discover__right" />
          </div>
        </div>
      </section>
      <section className="atmosphere__section">
        <div className="atmosphere__left">
          <div className="atmosphere__left__img">
            <img src={atmosphereleft} alt="atmosphereleft" />
          </div>
        </div>

        <div className="atmosphere__content">
          <div className="atmosphere__content__heading__info">
            <div className="atmosphere__content__heading">
              An Atmosphere of serenity & Comfort
            </div>
            <div className="atmosphere__content__info">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500
            </div>
          </div>
          <div className="atmosphere__content__img">
            <img src={atmospherecontent} alt="atmospherecontent" />
          </div>
        </div>
        <div className="atmosphere__right">
          <div className="atmosphere__right__img">
            <img src={atmosphereright} alt="atmosphereright" />
          </div>
        </div>
      </section>
      <section className="service">
        <div className="service__left">
          <div className="service__left__img">
            <img src={service} alt="" />
          </div>
        </div>
        <div className="service__right">
          <div className="service__right__heading">About Saloon Services</div>
          <div className="service__right__info">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
          <div className="service__right__button">
            <button>Learn More</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
