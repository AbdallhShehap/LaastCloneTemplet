import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FiveSectionSlider from "./FiveSectionSlider";
import Part3FiveSection from "./Part3FiveSection";
import "../asisste/FiveSection.css";

export default function FiveSection() {
  return (
    <>
      {/* col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2 */}
      {/* col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-9 */}
      {/* col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1*/}

      <Container fluid className="FiveSection-cont">
        <Row>
          <Col xs={1} md={1} xl={1} xxl={2}></Col>

          <Col xs={5} md={5} xl={5} xxl={5} className="center1600"
            style={{
              display: "flex",
              justifyContent: "start",
              marginTop: "3rem",
              alignItems: "start",
              fontFamily:"sans-serif"
            }}
          >
            <p
              style={{ color: "#888888", fontSize: "20px", fontWeight: "600", fontFamily:"sans-serif" }}
            >
              Check Our Company Inside Story
            </p>
          </Col>

          <Col xs={1} md={1} xl={1} xxl={5}></Col>
        </Row>

        <Row>
          <Col xs={1} md={1} xl={1} xxl={2}></Col>
          <Col xs={6} md={6} xl={6} xxl={6} className="center1600"
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
            }}
          >
            <h2 style={{ color: "white", fontFamily:"sans-serif" }}>Check Our Company Inside Story</h2>
          </Col>

          <Col xs={5} md={5} xl={2} xxl={2}>
            <div className="fivecircle-container" style={{ position: "relative" }}>
              {/* <div style={{ display: "flex", justifyContent: "start" }}>
               <button class="circlebtn">GET_IN_TOUCH</button>
               </div> */}

              <div className="fivecircle-btn"></div>
              <span className="fivecircle-btnspan" style={{ color: "white" }}>
                MORE NEWS
              </span>
            </div>
          </Col>

          <Col xs={1} md={1} xl={2} xxl={2}></Col>
        </Row>

        <Row>
          <Col xs={1} md={1} xl={1} xxl={2}></Col>

          <Col xs={10} md={10} xl={10} xxl={8} className="center1600">
            <FiveSectionSlider />
          </Col>

          <Col xs={1} md={1} xl={1} xxl={2}></Col>
        </Row>
      </Container>

      <div style={{ marginTop: "100px" }}>
        <Part3FiveSection />
      </div>
    </>
  );
}
