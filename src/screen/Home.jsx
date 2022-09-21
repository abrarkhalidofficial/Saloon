import { useEffect, useState } from "react";
import discoverleft from "../assets/discover-left.png";
import discovercontent from "../assets/discover-content.png";
import discoverright from "../assets/discover-right.png";
import atmosphereleft from "../assets/atmosphere-left.png";
import atmosphereright from "../assets/atmosphere-right.png";
import atmospherecontent from "../assets/atmosphere-content.png";
import service from "../assets/services.png";
import productsleft from "../assets/products-left.png";
import productsright from "../assets/products-right.png";

function Home() {
  const [selectedItem, setSelectedItem] = useState([]);
  const list = [
    {
      name: "Sauna",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: productsright,
      defaultChecked: true,
    },
    {
      name: "Whirlpool",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: productsright,
    },
    {
      name: "Jet bath",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: productsright,
    },
    {
      name: "Steam",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: productsright,
    },
    {
      name: "Message",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: productsright,
    },
    {
      name: "Mud bath",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: productsright,
    },
    {
      name: "Salt scrub",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: productsright,
    },
    {
      name: "body wraps",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: productsright,
    },
    {
      name: "Body masks",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: productsright,
    },
    {
      name: "Reflexology ",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: productsright,
    },
    {
      name: "Waxing. ",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: productsright,
    },
  ];
  useEffect(() => {
    list
      .filter((_item, i) => i === 0)
      .map((item) => {
        setSelectedItem(item);
      });
  }, []);

  return (
    <>
      <section className="discover__Section">
        <div className="discover__left">
          <div className="discover__left__img">
            <img src={discoverleft} alt="discover__left" />
          </div>
        </div>
        <div className="discover__content">
          <div
            className="discover__content__img"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <img src={discovercontent} alt="discover__content" />
          </div>
          <div className="discover__content__heading__and__info">
            <div
              className="discover__content__heading"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              Discover the Gorgeous Shine Within Us
            </div>
            <div
              className="discover__content__info"
              data-aos="fade-up"
              data-aos-delay="70"
              data-aos-duration="1500"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
            <div
              className="discover__content__button"
              data-aos="fade-up"
              data-aos-delay="80"
              data-aos-duration="1600"
            >
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
      <section
        className="products"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <div
          className="products___heading"
          data-aos="fade-up"
          data-aos-delay="80"
          data-aos-duration="1000"
        >
          We Provide a Full Range of Services
        </div>
        <div
          className="products__all__content"
          data-aos="fade-up"
          data-aos-delay="70"
          data-aos-duration="800"
        >
          <div>
            <div className="products___left__img">
              <img src={productsleft} alt="products___left" />
            </div>
            <div
              className="products__all__button"
              data-aos="fade-up"
              data-aos-delay="90"
              data-aos-duration="1500"
            >
              {list.map((item) => (
                <div className="product__button">
                  <input
                    type="radio"
                    className="product__button__input"
                    name="product__button"
                    defaultChecked={item.defaultChecked}
                    onClick={() => {
                      setSelectedItem(item);
                      console.log("hey");
                    }}
                  />
                  <div className="product__button__content">{item.name}</div>
                </div>
              ))}

              {/* <button className="product__button">Whirlpool</button>
              <button className="product__button">Jet bath</button>
              <button className="product__button">Steam room</button>
              <button className="product__button">Massage</button>
              <button className="product__button">Mud bath</button>
              <button className="product__button">Salt scrub</button>
              <button className="product__button">Seaweed body wraps</button>
              <button className="product__button">
                Clay or herbal body masks
              </button>
              <button className="product__button">Reflexology </button>
              <button className="product__button">Waxing.</button> */}
            </div>
          </div>
          <div className="products___right">
            <div
              className="products___right__img"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <img src={selectedItem?.image} alt="products___right" />
            </div>
            <div className="products___right___heading__info">
              <div
                className="products___right___heading"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                {selectedItem?.name}
              </div>
              <div
                className="products___right___heading__short"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                {selectedItem?.name}
              </div>
              <div
                className="products___right___info"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="1500"
              >
                {selectedItem?.description}
              </div>
              <div
                className="products___right___button"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1600"
              >
                Book Now
              </div>
            </div>
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
            <div
              className="atmosphere__content__heading"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              An Atmosphere <br /> of serenity & Comfort
            </div>
            <div
              className="atmosphere__content__info"
              data-aos="fade-up"
              data-aos-delay="70"
              data-aos-duration="1500"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500
            </div>
          </div>
          <div
            className="atmosphere__content__img"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
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
          <div
            className="service__left__img"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <img src={service} alt="" />
          </div>
        </div>
        <div className="service__right">
          <div
            className="service__right__heading"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            About Saloon Services
          </div>
          <div
            className="service__right__info"
            data-aos="fade-up"
            data-aos-delay="70"
            data-aos-duration="1500"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
          <div
            className="service__right__button"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="1600"
          >
            <button>Learn More</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
