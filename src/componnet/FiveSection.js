import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FiveSectionSlider from "./FiveSectionSlider";
import Part3FiveSection from "./Part3FiveSection";
import "../asisste/FiveSection.css";
import { Link } from "react-router-dom";

export default function FiveSection() {
 

  const [products, setProducts] = useState([])


useEffect(() => {
  // Fetch data from the API using Axios
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:1010/newsslider/datafixednews/1');
      // Assuming the response data is an array of objects with 'title' and 'image' properties
      console.log(response.data)
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);

 
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
              style={{ color: "#888888", fontSize: "20px", fontWeight: "600", fontFamily:"sans-serif", cursor:'default' }}
            >
              {products.title1}
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
            <h2 style={{ color: "white", fontFamily:"sans-serif",cursor:'default' }}>              {products.title2}</h2>
          </Col>

          <Col xs={5} md={5} xl={2} xxl={2}>
            <div className="fivecircle-container" style={{ position: "relative" }}>
              {/* <div style={{ display: "flex", justifyContent: "start" }}>
               <button class="circlebtn">GET_IN_TOUCH</button>
               </div> */}

               <Link to={products.buttonLink}>
              <div className="fivecircle-btn"></div>
              <span className="fivecircle-btnspan" style={{ color: "white" }}>
              {products.buttonName}

              </span>
              </Link>
            </div>
          </Col>

          <Col xs={1} md={1} xl={2} xxl={2}></Col>
        </Row>

        <Row>
          <Col xs={1} md={1} xl={1} xxl={2}></Col>

          <Col xs={10} md={10} xl={10} xxl={8} className="center1600" >
            <FiveSectionSlider />
          </Col>

          <Col xs={1} md={1} xl={1} xxl={2}></Col>
        </Row>
      </Container>

      <div style={{ marginTop: "100px",cursor:'default' }}>
        <Part3FiveSection />
      </div>
    </>
  );
}
