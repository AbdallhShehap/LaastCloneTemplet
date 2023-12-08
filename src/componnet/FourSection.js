
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from "react-bootstrap/Carousel";
import "../asisste/FourSection.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function FourSection() {
  const [index, setIndex] = useState(0);
  const [slideData, setSlideData] = useState([]); // Initialize slideData as empty array
  const [icons, setIcons] = useState([]); // State for icon logos


  useEffect(() => {
    const fetchSlideData = async () => {
      try {
        const response = await axios.get('http://localhost:1010/reviews/reviewsslide');
        setSlideData(response.data);
      } catch (error) {
        console.error("Error fetching slide data: ", error);
      }
    };

    const fetchiconData = async () => {
      try {
        const response = await axios.get('http://localhost:1010/iconunderreviews/reviewsicon'); // Replace with your actual icons endpoint
        setIcons(response.data);
      } catch (error) {
        console.error("Error fetching icon data: ", error);
      }
    };

    fetchSlideData();
    fetchiconData();
  }, []);

  const handleSelect = (newIndex) => {
    if (newIndex >= slideData.length) {
        newIndex = 0; // If newIndex is greater than slide count, start from the first slide
    } else if (newIndex < 0) {
        newIndex = slideData.length - 1; // If newIndex is negative, move to the last slide
    }
    setIndex(newIndex);
};


  // const handleSelect = (selectedIndex, e) => {
  //   const slideCount = slideData.length;
  //   let newIndex = (index + selectedIndex) % slideCount;
  //   if (newIndex < 0) {
  //     newIndex = slideCount - 1;
  //   }
  //   setIndex(newIndex);
  // };

  // const slideData = [
  //   {
  //     name: "John Doe",
  //     subname: "juak",
  //     imageSrc:
  //       "https://wgl-demo.net/bili/wp-content/uploads/2023/03/landing-12.jpg",
  //     description:
  //       "“Our office is something we are pleased with. We consider it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name.”",
  //   },
  //   {
  //     name: "Jane Smith",
  //     subname: "juak",
  //     imageSrc:
  //       "https://wgl-demo.net/bili/wp-content/uploads/2023/03/landing-11.jpg",
  //     description:
  //       "“Our office is something we are pleased with. We consider  it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name.”",
  //   },
  //   {
  //     name: "Jane Smith",
  //     subname: "juak",
  //     imageSrc:
  //       "https://wgl-demo.net/bili/wp-content/uploads/2023/03/landing-4.jpg",
  //     description:
  //       "“Our office is something we are pleased with. We consider  it is wanting to come here and afterward difficult to leave it. Our office is additionally a big name.”",
  //   },
  // ];

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
                      cursor:'default'
                    }}
                  >
                    <div className="left-part-container">
                   
                      <img  src={`http://localhost:1010/${slide.image}`} style={{ objectFit: 'cover', objectPosition:" center center"}} alt={slide.name} />
                      <div>
                        <p style={{ fontSize: "2rem", color: "white" }}>
                          {slide.name}
                        </p>
                        <p style={{ fontSize: "1rem", color: "#FF7425" }}>
                          {slide.job}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="slider-part right-part col-sm-10 col-md-10 col-lg-10 col-xl-9 col-xxl-8 "
                    style={{
                      textAlign: "start",
                      cursor:'default'
                    }}
                  >
                    <p className="slide-description">{slide.content}</p>
                  </div>

                  <div className="col-xxl-1 "></div>
                </div>
              </Carousel.Item>
            ))}
            <div className="carousel-controls-left-4">
              <button onClick={() => handleSelect(index - 1)}>&#8249; </button>
            </div>
            <div className="carousel-controls-right-4">
              <button onClick={() =>  handleSelect(index + 1)}> &#8250;</button>
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
              {icons.map((icon, index) => (
                <div key={index} className="col-ms-6 col-md-2">
                  <img
                   src={`http://localhost:1010/${icon.icon}`}
                    width="30%"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2"></div>
      </div>
    </div>
  );
}