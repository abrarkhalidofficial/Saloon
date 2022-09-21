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
      <section className="products">
        <div className="products___heading">
          We Provide a Full Range of Services
        </div>
        <div className="products__all__content">
          <div className="products___left">
            <div className="products___left__img">
              <img src={productsleft} alt="products___left" />
            </div>
            <div className="products__all__button">
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
            <div className="products___right__img">
              <img src={selectedItem?.image} alt="products___right" />
            </div>
            <div className="products___right___heading__info">
              <div className="products___right___heading">
                {selectedItem?.name}
              </div>
              <div className="products___right___heading__short">
                {selectedItem?.name}
              </div>
              <div className="products___right___info">
                {selectedItem?.description}
              </div>
              <div className="products___right___button">Book Now</div>
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
            <div className="atmosphere__content__heading">
              An Atmosphere <br /> of serenity & Comfort
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
