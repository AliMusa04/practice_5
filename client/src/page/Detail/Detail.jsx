import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import "./Detail.scss";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:8080/flowers/${id}`).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.name}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section className="detail_section">
        <div className="detail_contanier">
          <div className="detail_cont">
            <div className="detail_card">
              <img src={`${data.img}`} alt="" />
              <div className="detail_text">
                <h2>{data.name}</h2>
                <h4>$ {data.price}</h4>
              </div>
              <button
                onClick={() => {
                  navigate(-1);
                }}>
                Back
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;
