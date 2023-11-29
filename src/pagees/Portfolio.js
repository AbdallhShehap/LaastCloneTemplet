import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../asisste/portfolio.css";
import { Link } from "react-router-dom";
import Menu from "../componnet/Menu";
import Footer from "../componnet/Footer";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const caseStadyData = [
    {
      id: 1,
      category: "DESIGN",
      title: "Unique Product Design",
      link: "/",
      imageSrc:
        "https://wgl-demo.net/bili/wp-content/uploads/2022/03/portfolio-s-1-740x740.jpg",
    },
    {
      id: 2,
      category: "DEVELOPMENT",
      title: "Development Software",
      link: "/",
      imageSrc:
        "https://wgl-demo.net/bili/wp-content/uploads/2022/03/portfolio-s-13-740x740.jpg",
    },
    {
      id: 3,
      category: "DEVELOPMENT TECHNOLOGY",
      title: "Technology Process",
      link: "/",
      imageSrc:
        "https://wgl-demo.net/bili/wp-content/uploads/2022/03/portfolio-s-6-740x740.jpg",
    },
    {
      id: 4,
      category: "DEVELOPMENT TECHNOLOGY",
      title: "Mobile App for Bikes",
      link: "/blog",
      imageSrc:
        "https://wgl-demo.net/bili/wp-content/uploads/2022/03/portfolio-s-5-740x740.jpg",
    },
    {
      id: 5,
      category: "DEVELOPMENT",
      title: "Website for Agency",
      link: "/blog",
      imageSrc:
        "https://wgl-demo.net/bili/wp-content/uploads/2022/03/portfolio-s-7-740x740.jpg",
    },
    {
      id: 6,
      category: "TECHNOLOGY",
      title: "UI for Music Website",
      link: "/blog",
      imageSrc:
        "https://wgl-demo.net/bili/wp-content/uploads/2022/03/portfolio-s-4-740x740.jpg",
    },
    {
      id: 7,
      category: "DESIGN",
      title: "Branding Process",
      link: "/contactus",
      imageSrc:
        "https://wgl-demo.net/bili/wp-content/uploads/2022/03/portfolio-s-13-740x740.jpg",
    },
    {
      id: 8,
      category: "DEVELOPMENT",
      title: "Digital Platform",
      link: "/contactus",
      imageSrc:
        "https://wgl-demo.net/bili/wp-content/uploads/2022/03/portfolio-s-1-740x740.jpg",
    },
    {
      id: 9,
      category: "MARKETING",
      title: "Product Development",
      link: "/contactus",
      imageSrc:
        "https://wgl-demo.net/bili/wp-content/uploads/2022/03/portfolio-s-9-740x740.jpg",
    },
  ];

  const caseStadyCategories = [
    {
      id: 1,
      category: "DESIGN",
    },
    {
      id: 2,
      category: "DEVELOPMENT",
    },
    {
      id: 3,
      category: "MARKETING",
      
    },
    {
      id: 4,
      category: "TECHNOLOGY",
    },
  ];

  const getCategoryCounts = () => {
    const categoryCounts = {};
    caseStadyData.forEach((product) => {
      const categories = product.category.split(" ");
      categories.forEach((category) => {
        categoryCounts[category] = (categoryCounts[category] || 0) + 1;
      });
    });
    return categoryCounts;
  };

  const filteredData =
    selectedCategory === "ALL"
      ? caseStadyData
      : caseStadyData.filter((product) =>
          product.category.includes(selectedCategory)
        );


         // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can customize the duration
  }, []);

  return (
    <>
      <div className="portfolioPage container-fluid">
        <div className="row">
          <div className=" col-lg-12 col-xl-12" style={{ padding: "0" }}>
            <Menu />
          </div>
        </div>

        <div
          className="row "
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            color: "white",
            fontSize: "53px",
            fontWeight: "500",
            margin: "100px",
          }}
        >
          Portfolio Grid
        </div>

        <div className="row portfolioPageContant">
          <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2"></div>

          <div
            className="col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-8"
            style={{ padding: "0" }}
          >
            <div className="container-fluid" style={{}}>
              <div className="row">
                <div className="col-4">
                  <p
                    style={{
                      color: "#888888",
                      fontSize: "12px",
                      fontWeight: "800",
                      textAlign: "start",
                      marginBottom: "1rem",
                      fontFamily: "sans-serif",
                    }}
                  >
                    DISCOVER OUR CASES
                  </p>
                  <p
                    style={{
                      color: "white",

                      fontSize: "35px",
                      fontWeight: "700",
                      textAlign: "start",
                      marginBottom: "3rem",
                      fontFamily: "sans-serif",
                      cursor: "pointer",
                    }}
                  >
                    Latest Projects
                  </p>
                </div>
                <div className="col-8" style={{ textAlign: "end" }}>
                  <button
                    onClick={() => setSelectedCategory("ALL")}
                    className={`category ${
                      selectedCategory === "ALL" ? "active" : ""
                    }`}
                  >
                    ALL <sup>{caseStadyData.length}</sup>
                  </button>

                  {caseStadyCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.category)}
                      className={`category ${
                        selectedCategory === category.category ? "active" : ""
                      }`}
                    >
                      {category.category}{" "}
                      <sup>{getCategoryCounts()[category.category]}</sup>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2"></div>
        </div>

        <div className="row portfolioPageContant">
          {/* col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2 */}
          {/* col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-9 */}
          {/* col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1*/}

          <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2"></div>

          <div
            className="col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-8"
            style={{ padding: "0" }}
          >
            <div className="container-fluid">
              <div className="row">
                {filteredData.map((product) => (
                  <div
                    key={product.id}
                    className="col-4"
                    style={{ marginBottom: "2rem", cursor: "pointer" }}
                    data-aos="zoom-in" 
                  >
                    <Link to={product.link} style={{ textDecoration: "none" }}>
                      <div className="category-card"  >
                        <img
                          className="img-category-card"
                          src={product.imageSrc}
                          alt={product.title}
                          style={{
                            marginLeft: "0",
                          }}
                        
                        />
                        <div class="middle">
                          {/* <div class="text">John Doe</div> */}
                          <img src="https://cdn.discordapp.com/attachments/1141052754161311774/1179013644030312468/arrow_infobox.png?ex=65783d05&is=6565c805&hm=728afec96e63c39a4d5f7a64710213c03c7431d4441fbd34973449ade194ac93&" />
                        </div>

                        <div
                          className="blog-image-text"
                          style={{ marginTop: "1rem" }}
                        >
                          <p
                            className="categoryBlog"
                            style={{
                              color: "#888888",

                              fontWeight: "700",
                              // display: 'flex',
                              // justifyContent: 'start',
                              textAlign: "start",
                            }}
                          >
                            {product.category}
                          </p>

                          <p
                            className="title-blog"
                            style={{
                              lineHeight: "10px",
                            }}
                          >
                            {product.title}
                          </p>

                          {/* {product.ReadMore} */}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className=" col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2"></div>
        </div>

        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "100px",
            marginTop: "50px",
            cursor: "pointer",
          }}
        >
          <div className="col-2" style={{}}>
            <div
              class="portfoliocircle-container portfolioPageContant"
              style={{ position: "relative" }}
            >
              <div className="portfoliocircle-btn"></div>
              <span
                className="portfoliocircle-btnspan"
                style={{ color: "white" }}
              >
                LOAD MORE NEWS
              </span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12"></div>
          <Footer />
        </div>
      </div>
    </>
  );
}
