import React, { useEffect, useState } from "react";
import "./Home.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addWish } from "../../redux/slice/WishSlice";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  const [data, setData] = useState([]);

  const [fake, setFake] = useState(false);

  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(true);

  const [load, setLoad] = useState(3);
  useEffect(() => {
    axios.get("http://localhost:8080/flowers").then((res) => {
      setData(res.data);
    });
  }, [fake]);

  const filterPrice = (obj) => {
    setToggle(!toggle);

    if (toggle) {
      let sortedData = obj.sort((a, b) => a.price - b.price);
      setData([...sortedData]);
    } else {
      let unSortedData = obj.sort((a, b) => b.price - a.price);
      setData([...unSortedData]);
    }
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section className="carousel_section">
        <Carousel showThumbs={false} showIndicators={false}>
          <div className="position_relative">
            <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl4.jpg" />
            <div className="carsel_text">
              <p>Floral</p>
              <h3>Excellent bouquets for you</h3>
            </div>
          </div>
          <div className="position_relative">
            <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl4.jpg" />
            <div className="carsel_text">
              <p>Floral</p>
              <h3>Excellent bouquets for you</h3>
            </div>
          </div>
          <div className="position_relative">
            <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg" />
            <div className="carsel_text">
              <p>Floral</p>
              <h3>Excellent bouquets for you</h3>
            </div>
          </div>
        </Carousel>
      </section>

      <section className="mid_section">
        <div className="home_contanier">
          <div className="mid_cart">
            <div className="mid_cart_text">
              <div className="mid_cart_text_first">
                <h2>Our Misson</h2>
                <p>
                  Lorem ipsum dolor sit amet, pri omnium verterem id, sit labore
                  dicunt an, ea civibus.
                </p>
                <button>READ MORE</button>
              </div>
            </div>
            <div className="mid_cart_img">
              <img
                src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flowers_section">
        <div className="home_contanier">
          <div className="flowers_title_cards">
            <div className="flowers_title">
              <p>Devoted to wonderful beauty</p>
              <h2> Flowers Pricing</h2>
            </div>
            <div className="search_price">
              <button
                className="btn_filter"
                onClick={() => {
                  filterPrice(data);
                }}>
                Filter by price
              </button>

              <input
                type="text"
                placeholder="Search By Name"
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
            </div>
            <div className="flowers_cards_contanier">
              {data &&
                data
                  .filter((item) => {
                    if (item.name.toLowerCase().includes(input.toLowerCase())) {
                      return item;
                    }
                  })
                  .splice(0, load)

                  .map((item) => {
                    return (
                      <div key={item._id} className="flowers_card">
                        <img src={`${item.img}`} alt="" />
                        <div className="card_text">
                          <h2>{item.name}</h2>

                          <p>
                            $<span>{item.price}</span>
                          </p>
                        </div>

                        <div className="card_button">
                          <Link to={`/detail/${item._id}`}>
                            <button className="detail">Detail</button>
                          </Link>
                          <button
                            style={{ backgroundColor: "red" }}
                            onClick={() => {
                              axios.delete(
                                `http://localhost:8080/flowers/${item._id}`
                              );
                              setFake(!fake);
                            }}>
                            Delete
                          </button>
                          <button
                            className="addWish"
                            onClick={() => {
                              dispatch(addWish(item));
                            }}>
                            Add WishList
                          </button>
                        </div>
                      </div>
                    );
                  })}
              <div className="loadmore_btn">
                <button
                  onClick={() => {
                    setLoad(load + 3);
                  }}>
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing_section">
        <div className="home_contanier">
          <div className="pricing_div">
            <div className="flowers_title_price">
              <p>Devoted to wonderful beauty</p>
              <h2> Events Pricing</h2>
            </div>

            <div className="price_cart_contanier">
              <div className="price_cart">
                <div className="price_cart_text">
                  <h1>
                    <span>$16</span> per table
                  </h1>
                  <h3>Birthday Events</h3>
                  <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
                </div>

                <button>Shop now</button>
              </div>

              <div className="price_cart">
                <div className="price_cart_text">
                  <h1>
                    <span>$16</span> per table
                  </h1>
                  <h3>Birthday Events</h3>
                  <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
                </div>

                <button>Shop now</button>
              </div>

              <div className="price_cart">
                <div className="price_cart_text">
                  <h1>
                    <span>$16</span> per table
                  </h1>
                  <h3>Birthday Events</h3>
                  <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
                </div>

                <button>Shop now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="teams_section">
        <div className="home_contanier">
          <div className="teams_title_cards">
            <div className="teams_section_title">
              <p>Devoted to wonderful beauty</p>
              <h2> Flowers Pricing</h2>
            </div>

            <div className="teams_card_contanier">
              <div className="teams_card">
                <img
                  src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg"
                  alt=""
                />
                <div className="tems_card_text">
                  <h3>Velva Kopf</h3>
                  <p>Biologist</p>
                </div>
              </div>

              <div className="teams_card">
                <img
                  src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr2.jpg"
                  alt=""
                />
                <div className="tems_card_text">
                  <h3>Velva Kopf</h3>
                  <p>Biologist</p>
                </div>
              </div>

              <div className="teams_card">
                <img
                  src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr3.jpg"
                  alt=""
                />
                <div className="tems_card_text">
                  <h3>Velva Kopf</h3>
                  <p>Biologist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
