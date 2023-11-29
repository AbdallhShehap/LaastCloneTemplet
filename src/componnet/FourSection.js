import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../asisste/FourSection.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function FourSection() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    const slideCount = slideData.length;
    let newIndex = (index + selectedIndex) % slideCount;
    if (newIndex < 0) {
      newIndex = slideCount - 1;
    }
    setIndex(newIndex);
  };

  const slideData = [
    {
      name: "John Doe",
      subname: "juak",
      imageSrc:
        "https://wgl-demo.net/bili/wp-content/uploads/2023/03/landing-12.jpg",
      description:
        "“Our office is something we are pleased with. We consider it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name.”",
    },
    {
      name: "Jane Smith",
      subname: "juak",
      imageSrc:
        "https://wgl-demo.net/bili/wp-content/uploads/2023/03/landing-11.jpg",
      description:
        "“Our office is something we are pleased with. We consider  it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name.”",
    },
    {
      name: "Jane Smith",
      subname: "juak",
      imageSrc:
        "https://wgl-demo.net/bili/wp-content/uploads/2023/03/landing-4.jpg",
      description:
        "“Our office is something we are pleased with. We consider  it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name.”",
    },
  ];

  return (
    <div div className="all container-fluid">
      <div className="FourSection row">
        {/* col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2 */}
        {/* col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-9 */}
        {/* col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1*/}

        <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2"></div>

        <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-8 center1600 "
          style={{}}
        >
          <Carousel
            className="cont "
            controls={false}
            indicators={false}
            activeIndex={index}
            onSelect={handleSelect}
          >
            {slideData.map((slide, slideIndex) => (
              <Carousel.Item key={slideIndex} className="container-fluid">
                <div className="slider-container row">
                  <div className="slider-part left-part col-sm-10 col-md-10 col-lg-10 col-xl-3 col-xxl-3"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      height: "100%",
                    }}
                  >
                    <div className="left-part-container">
                      <img src={slide.imageSrc} alt={slide.name} />
                      <div>
                        <p style={{ fontSize: "2rem", color: "white" }}>
                          {slide.name}
                        </p>
                        <p style={{ fontSize: "1rem", color: "#FF7425" }}>
                          {slide.subname}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="slider-part right-part col-sm-10 col-md-10 col-lg-10 col-xl-9 col-xxl-8 "
                    style={{
                      textAlign: "start",
                    }}
                  >
                    <p className="slide-description">{slide.description}</p>
                  </div>

                  <div className="col-xxl-1 "></div>
                </div>
              </Carousel.Item>
            ))}
            <div className="carousel-controls-left-4">
              <button onClick={() => handleSelect(-1)}>&#8249; </button>
            </div>
            <div className="carousel-controls-right-4">
              <button onClick={() => handleSelect(1)}> &#8250;</button>
            </div>
          </Carousel>
        </div>

        <div className=" col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2"></div>
      </div>

      <div className="row under-carousel">
        {/* col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2 */}
        {/* col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-9 */}
        {/* col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1*/}

        <div className="col-sm-1 col-md-1 col-lg-1 col-xl-2 col-xxl-3 "></div>

        <div className="col-sm-10 col-md-10 col-lg-10 col-xl-9 col-xxl-7 center1600 ">
          <div className=" container">
            <div className="row">
              <div className="col-ms-6 col-md-2">
                {" "}
                <img
                  src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/partner_1.png"
                  width="30%"
                />
              </div>

              <div className="col-ms-6 col-md-2">
                {" "}
                <img
                  src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/partner_5.png"
                  width="30%"
                />
              </div>

              <div className="col-ms-6 col-md-2">
                {" "}
                <img
                  src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/partner_3.png"
                  width="30%"
                />
              </div>

              <div className="col-ms-6 col-md-2">
                {" "}
                <img
                  src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/partner_4.png"
                  width="30%"
                />
              </div>

              <div className="col-ms-6 col-md-2">
                {" "}
                <img
                  src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/partner_6.png"
                  width="30%"
                />
              </div>

              <div className="col-ms-6 col-md-2">
                {" "}
                <img
                  src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/partner_3.png"
                  width="30%"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2"></div>
      </div>
    </div>
  );
}
