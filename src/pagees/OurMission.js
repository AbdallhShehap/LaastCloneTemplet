import React, { useState,useEffect } from "react";
import "../asisste/ourMission.css";
import Menu from "../componnet/Menu";
import Part3FiveSection from "../componnet/Part3FiveSection";
import Footer from "../componnet/Footer";
import AOS from 'aos';
import Tabe from '../componnet/Tabs';
import 'aos/dist/aos.css'; // Import AOS styles



const statements = [
  {
    text: "Digital Marketing",
    image:
      "https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-5-740x700.jpg",
  },
  {
    text: "User Experience",
    image:
      "https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-2-1-740x700.jpg",
  },
  {
    text: "Development",
    image:
      "https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-6-740x700.jpg",
  },
  {
    text: "Branding",
    image:
      "https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-4-740x700.jpg",
  },
  {
    text: "Mobile Solutions",
    image:
      "https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-3-740x700.jpg",
  },
  {
    text: "Illustrations",
    image:
      "https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-7-740x700.jpg",
  },
  {
    text: "App Design",
    image:
      "https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-3-740x700.jpg",
  },

  {
    text: "Photo",
    image:
      "https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-7-740x700.jpg",
  },
];

function OurMission() {
  const [currentImage, setCurrentImage] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [timeoutId, setTimeoutId] = useState(null);



  const handleMouseEnter = (image) => {
    const delay = 300;
    const id = setTimeout(() => {
      setCurrentImage(image);
    }, delay);
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId); // Clear the timeout if the mouse leaves before the delay
    setCurrentImage(null);
  };

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      className="ourMission container-fluid" style={{padding:"0"}}
      onMouseMove={handleMouseMove} // Track mouse movement
    >
      <Menu />

      <div className="row"
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
        {/* Title */}
        Our Mission
      </div>

      {/* Our Philosophy */}
      <div className="row two-column-container align-items-center">
        <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1  col-xxl-2 "></div>

        
        <div className="col-sm-11 col-md-6 col-lg-4 col-xl-4 col-xxl-4 ourMission-left-side">
          <p
            style={{
              color: "#888888",
              fontSize: "18px",
              fontWeight: "700",
              textAlign: "start",
              marginBottom: "1rem",
              fontFamily:"sans-serif"
            }}
          >
            OUR PHILOSOPHY
          </p>
          <p
            style={{
              color: "white",
              fontFamily:"sans-serif",
              fontSize: "35px",
              fontWeight: "700",
              textAlign: "start",
              marginBottom: "1rem",
            }}
          >
            Create Brand Identities & Digital Experiences
          </p>

          <p
            style={{
              color: "#D0D0D0",
              fontSize: "18px",
              textAlign: "start",
              marginBottom: "1rem",
              fontFamily:"sans-serif"
            }}
          >
            This is the main factor that sets us apart from our competition and
            allows us to deliver a specialist business consultancy service.
          </p>
        </div>

        <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-6 ourMission-right-side">
          <div className="container">
            <div className="row" style={{ marginBottom: "2rem", padding: "0" ,
              fontFamily:"sans-serif"}}>
              <div className="col-10" style={{ display: "flex" }}>
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <div>
                        <p>
                          <button className="circleOurMission">01</button>
                        </p>
                        <p style={{ fontSize: "14px", color: "#888888" }}>
                          ANEW BUSINESS
                        </p>

                        <p style={{ fontSize: "28px" }}>Innovation</p>
                      </div>
                    </div>

                    <div class="flip-card-back">
                      <div>
                        <h1>Innovation</h1>
                        <p>
                          {" "}
                          This is the main factor that sets us apart from our
                          competition
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <div>
                        <p>
                          <button className="circleOurMission">02</button>
                        </p>
                        <p style={{ fontSize: "14px", color: "#888888" }}>
                          ANEW BUSINESS
                        </p>

                        <p style={{ fontSize: "28px" }}>Innovation</p>
                      </div>
                    </div>

                    <div class="flip-card-back">
                      <div>
                        <h1>Innovation</h1>
                        <p>
                          {" "}
                          This is the main factor that sets us apart from our
                          competition
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-2"></div>
            </div>

            <div className="row" style={{ padding: "0",
              fontFamily:"sans-serif" }}>
              <div className="col-10" style={{ display: "flex" }}>
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <div>
                        <p>
                          <button className="circleOurMission">03</button>
                        </p>
                        <p style={{ fontSize: "14px", color: "#888888" }}>
                          ANEW BUSINESS
                        </p>

                        <p style={{ fontSize: "28px" }}>Innovation</p>
                      </div>
                    </div>

                    <div class="flip-card-back">
                      <div>
                        <h1>Innovation</h1>
                        <p>
                          {" "}
                          This is the main factor that sets us apart from our
                          competition
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <div>
                        <p>
                          <button className="circleOurMission">04</button>
                        </p>
                        <p style={{ fontSize: "14px", color: "#888888" }}>
                          ANEW BUSINESS
                        </p>

                        <p style={{ fontSize: "28px" }}>Innovation</p>
                      </div>
                    </div>

                    <div class="flip-card-back">
                      <div>
                        <h1>Innovation</h1>
                        <p>
                          {" "}
                          This is the main factor that sets us apart from our
                          competition
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-2"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ margin: "100px" }}>
        <div className="col-1"></div>
        <div className="col-10">
          <b>
            <hr
              style={{ color: "white", fontSize: "54px", fontWeight: "900" }}
            />
          </b>
        </div>
        <div className="col-1"></div>
      </div>

      {/* statement with image matching */}

      {/* col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2
  col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-9
  col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1 */}

      <div className="row">
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#888888", fontSize: "14px",
              fontFamily:"sans-serif",fontWeight:"700" }}>
            WHAT WE OFFER FOR YOU
          </p>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div style={{ textAlign: "center" }}>
            <p>
              {statements.map((statement, index) => (
                <b
                  className="statement-text"
                  key={index}
                  onMouseEnter={() => handleMouseEnter(statement.image)}
                  onMouseLeave={handleMouseLeave}
                >
                  {statement.text} {" / "}
                </b>
              ))}
            </p>
          </div>
          {currentImage && (
            <FloatingImage image={currentImage} position={mousePosition} />
          )}
        </div>
      </div>

      <div className="row" style={{ margin: "100px" }}>
        <div className="col-1"></div>
        <div className="col-10">
          <b>
            <hr
              style={{ color: "white", fontSize: "54px", fontWeight: "900" }}
            />
          </b>
        </div>
        <div className="col-1"></div>
      </div>

      {/* Our VISION */}
      <div className="row two-column-container align-items-center"
        style={{ margin: "0", padding: "0", width: "100%" }}
      >
        <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-6 ourVision-right-side">
          <img
            src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/mission-s-1.jpg"
            className="IMGourmissionourvision"
          />
        </div>

        <div className="col-sm-11 col-md-6 col-lg-4 col-xl-4 col-xxl-4 ourVision-left-side">
          <p
            style={{
              color: "#888888",
              fontSize: "18px",
              fontWeight: "700",
              textAlign: "start",
              marginBottom: "1rem",
              fontFamily:"sans-serif"
            }}
          >
            OUR PHILOSOPHY
          </p>
          <p
            style={{
              color: "white",
              fontFamily:"sans-serif",
              fontSize: "35px",
              fontWeight: "700",
              textAlign: "start",
              marginBottom: "1rem",
            }}
          >
            Unlock Revenue Growth for Your Business
          </p>

          <p
            style={{
              color: "#D0D0D0",
              fontSize: "18px",
              textAlign: "start",
              marginBottom: "1rem",
            }}
          >
          
          <Tabe/>
          </p>

        </div>
      </div>

      <div className="row" style={{ margin: "100px" }}></div>

      <div className="row">

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <p style={{ color: "#888888" ,
              fontFamily:"sans-serif"}}>
            OVER 1K+ SOFTWARE BUSINESSES GROWING WITH BILI
          </p>
        </div>
  
        <div className="col-sm-1 col-md-1 col-lg-1 col-xl-2 col-xxl-2 "></div>

<div className="col-sm-10 col-md-10 col-lg-10 col-xl-9 col-xxl-9 ">
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

<div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1"></div>

      </div>


      <div className="row" style={{marginTop:"100px", marginBottom:"100px"}}>
      <Part3FiveSection/>
      </div>


      <div className="row">
        <div className="col-12"></div>
        <Footer />
      </div>
    </div>
  );
}

export default OurMission;

const FloatingImage = ({ image, position }) => {
  useEffect(() => {
    // Initialize AOS library
    AOS.init({
      duration: 200, // Set the duration of the animation
    });
  }, []);

  const style = {
    position: "fixed",
    top: position.y,
    left: position.x,
    zIndex: 2,
    height: "25rem",
    width: "25rem",
  };

  return <img src={image} alt="Floating Display" style={style} data-aos="zoom-in" />;
};

