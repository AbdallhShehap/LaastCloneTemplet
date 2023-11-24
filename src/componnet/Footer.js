import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../asisste/Footer.css";

export default function Footer() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "black" }}>
      {/* col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2 */}
      {/* col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-9 */}
      {/* col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1*/}
      <div className="row" >
        <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2"></div>
        <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-8 ">

        <MDBFooter bgColor="black" className="text-center text-lg-start text-muted "
        style={{margin:"0" , padding:"0"}}
        >
          
            <MDBContainer fluid className="text-center text-md-start mt-5 ">
              <MDBRow className="mt-3">
                <MDBCol md="2" lg="4" xl="2" className=" mb-4 center1600">
                  <img src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/logo-1.png" width="70px" height="80px"  />
                </MDBCol>

                <MDBCol
                  md="3"
                  lg="2"
                  xl="2"
                  className="mx-auto mb-4"
                  style={{ color: "white" }}
                >
                  <h6 className="text-uppercase fw-bold mb-4">Services</h6>
                  <p>
                    <a href="#!" className="text-reset custom-link">
                      UI/UX Experience
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset custom-link">
                      Digital Marketing
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset custom-link">
                      Web Developer
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset custom-link">
                      Product Design
                    </a>
                  </p>
                </MDBCol>

                <MDBCol
                  md="3"
                  lg="2"
                  xl="2"
                  className="mx-auto mb-4"
                  style={{ color: "white" }}
                >
                  <h6 className="text-uppercase fw-bold mb-4">Contect</h6>
                  <p>27 Division St, New York, NY</p>
                  <p>10002</p>
                  <p>+1 800 123 456 789</p>
                  <p>bili@mail.com</p>
                </MDBCol>

                <MDBCol
                  md="4"
                  lg="2"
                  xl="3"
                  className="mx-auto mb-4"
                  style={{ color: "white" }}
                >
                  <h6 className="text-uppercase fw-bold mb-4">Subscribe</h6>
                  <p>
                    <MDBIcon icon="home" className="me-2" />
                    Get news & updates
                  </p>
                  <hr />
                  <p style={{ color: "#888888" }}>
                    Our expertise, as well as our passion for web design, sets
                    us apart from other agencies.
                  </p>

                  <MDBIcon icon="print" className="me-3 " />
                  <div>
                    <a
                      href="https://twitter.com"
                      className="social-icon"
                      style={{ color: "white" }}
                    >
                      <FaTwitter size={20} />
                    </a>
                    <a
                      href="https://facebook.com"
                      className="social-icon"
                      style={{ marginLeft: "1rem", color: "white" }}
                    >
                      <FaFacebook size={20} />
                    </a>
                    <a
                      href="https://linkedin.com"
                      className="social-icon"
                      style={{ marginLeft: "1rem", color: "white" }}
                    >
                      <FaLinkedin size={20} />
                    </a>
                    <a
                      href="https://instagram.com"
                      className="social-icon"
                      style={{ marginLeft: "1rem", color: "white" }}
                    >
                      <FaInstagram size={20} />
                    </a>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          

          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" , color:"white"}}
          >
            © 2021 Copyright:
          </div>
        </MDBFooter>

        </div>

        <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2"></div>
      </div>
    </div>
  );
}
