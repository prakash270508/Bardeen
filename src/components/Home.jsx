import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  const [news, setNews] = useState([]);

  const apikey = import.meta.env.VITE_NEWS_API_KEY;

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=tesla&from=2023-05-21&sortBy=publishedAt&apiKey=${apikey}`
      );

      setNews(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  const featuredNews = news.filter((ele, index) => index > 0 && index < 4);
  const articleNews = news.filter((ele, index) => index > 4 && index < 55);

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(articleNews);

  return (
    <div className="container">
      <Navbar />
      <div className="line"></div>
      <div className="maincontainer my-4">
        <h4>
          <b>Featured Article</b>
        </h4>
        <div className="row">
          {news[0] && (
            <div className="col-5 mt-4">
              <img
                src={news[0].urlToImage ? news[0].urlToImage : ""}
                alt=""
                style={{ width: "100%", height: "42%" }}
                className="mt-3"
              />
              <div className="text-muted">
                {news[0].publishedAt ? news[0].publishedAt : ""}
              </div>
              <h4 className="mt-3">
                <b>{news[0].title ? news[0].title : ""}</b>
              </h4>
              <p className="text-muted">{news[0].description}</p>
              <hr />
            </div>
          )}
          <div className="col-7 mt-4">
            {featuredNews &&
              featuredNews.map((ele) => (
                <Link
                  to={ele.url}
                  className="links"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <div className="d-flex mt-3">
                    <div>
                      <img src={ele.urlToImage} alt="" />
                    </div>
                    <div className="feature_text">
                      <div className="text-muted">{ele.publishedAt}</div>
                      <div className="mt-3">
                        <h5>
                          <b>{ele.title}</b>
                        </h5>{" "}
                      </div>
                    </div>
                  </div>
                  <hr />
                </Link>
              ))}
          </div>
        </div>
        <div className="line"></div>
      </div>

      <div className="my-4">
        <h4 className="my-4">
          <b>Article News</b>
        </h4>
        <div className="row">
          {articleNews &&
            articleNews.map((ele) => (
              <>
                <Link
                  to={ele.url}
                  className="links col-3"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <div className="mt-3">
                    <img src={ele.urlToImage} alt="" height={200} width={300} />
                    <div>
                      <div className="text-muted">{ele.publishedAt}</div>
                      <div className="mt-3">
                        <h5>
                          <b>{ele.title}</b>
                        </h5>{" "}
                      </div>
                      <p>{ele.description}</p>
                    </div>
                  </div>
                  <hr />
                </Link>
              </>
            ))}
        </div>
      </div>
    </div>
  );
}
