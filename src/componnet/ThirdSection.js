import React from "react";
import Part1ThirdSection from "./Part1ThirdSection";
import "../asisste/ThirdSection.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Part3FirstSection from "./Part3FirstSection";

export default function ThirdSection() {
  const title1 = "Years of";
  const title2 = "Skilled";
  const title3 = "Visited";
  const title4 = "Projects";

  const text1 = "Experience";
  const text2 = "Professionals";
  const text3 = "Conferences";
  const text4 = "Worldwide";

  const Number1 = 10;
  const Number2 = 18;
  const Number3 = 32;
  const Number4 = 1;

  const ttrue = true;


  // fontFamily:"sans-serif"
  return (
    <>
      <div className="container-fluid ThirdSection">
        <div className="row" style={{marginBottom:"50px", marginTop:"50px"}}>
         
          <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2"></div>

          <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-8 HIGH-TEXT" style={{paddingLeft:"0"}}>
            <div className="row" >
              <div className="col thirdSwordart thirdSitalic-outline">
              <span class="thirdStext">
              <Part1ThirdSection
                  title={title1}
                  text={text1}
                  number={Number1}
              
                />
              </span>
               
              </div>

              <div className="col thirdSwordart thirdSitalic-outline">
              <span class="thirdStext">

                <Part1ThirdSection
                  title={title2}
                  text={text2}
                  number={Number2}
                />

              </span>
              </div>

              <div className="col thirdSwordart thirdSitalic-outline">
              <span class="thirdStext">

                <Part1ThirdSection
                  title={title3}
                  text={text3}
                  number={Number3}
                />

              </span>
              </div>

              <div className="col thirdSwordart thirdSitalic-outline">
              <span class="thirdStext">

                <Part1ThirdSection
                  title={title4}
                  text={text4}
                  number={Number4}
                  displayK={ttrue}
                />

              </span>
              </div>
            </div>

          </div>

          <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2"></div>

        </div>

            <div className="row">
            <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2"></div>

            <div className=" col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 HIGH-TEXT align-self-start " >
    <div
    className="thirdSWhatWeOffer"
      style={{
        fontSize: "13px",
        
        fontFamily:"sans-serif",
        fontWeight: "700",
        textAlign:"start",
        marginBottom:"1rem"
      }}
    >
      WHAT WE OFFER
    </div>

    <div
      style={{
        fontSize: "38px",
        color: "white",
        fontFamily:"sans-serif",
        fontWeight: "500",
        textAlign:"start"
      }}
    >
      Giving Your Business Some Great Ideas
    </div>

    <div className="thirdScircle-container" style={{position:"relative"}} >
      {/* <div style={{ display: "flex", justifyContent: "start" }}>
        <button class="circlebtn">GET_IN_TOUCH</button>
      </div> */}

      <div className="thirdScircle-btn"></div>
        <span className="thirdScircle-btnspan"  style={{ color: "white", fontSize:"20px" }}>MORE SERVICES</span>
    </div>



  </div>

           
              <div className="col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-5">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-12 col-md-5"
                      style={{ color: "white" }}
                    >
                      <div className="row"
                        style={{ color: "#888888", fontSize: "30px", textAlign:"start" }}
                      >
                        01
                      </div>
                      <div className="row hover-effect">
                        <hr style={{ width: "90%" }} />
                      </div>

                      <div className="row"
                        style={{
                          display: "flex",
                          justifyContent: "start",
                          textAlign: "start",
                          marginTop: "1rem",
                        }}
                      >
                        <h3>UI/UX Experience</h3>
                        <p style={{ marginTop: "1rem" }}>
                          Our expertise, as well as our passion for web design,
                          sets us apart from other agencies. Plus, our
                          experience demonstrates our ability.
                        </p>
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-1"></div>

                    <div className="col-sm-12 col-md-5"
                      style={{ color: "white" }}
                    >
                      <div
                        className="row"
                        style={{ color: "#888888", fontSize: "30px",  textAlign:"start"}}
                      >
                        02
                      </div>
                      <div className="row hover-effect">
                        <hr style={{ width: "90%" }} />
                      </div>

                      <div
                        className="row"
                        style={{
                          display: "flex",
                          justifyContent: "start",
                          textAlign: "start",
                          marginTop: "1rem",
                        }}
                      >
                        <h3>UI/UX Experience</h3>
                        <p style={{ marginTop: "1rem" }}>
                          Our expertise, as well as our passion for web design,
                          sets us apart from other agencies. Plus, our
                          experience demonstrates our ability.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12 col-md-5"
                      style={{ color: "white" }}
                    >
                      <div
                        className="row"
                        style={{ color: "#888888", fontSize: "30px", textAlign:"start"}}
                      >
                        03
                      </div>
                      <div className="row hover-effect">
                        <hr style={{ width: "90%" }} />
                      </div>

                      <div
                        className="row"
                        style={{
                          display: "flex",
                          justifyContent: "start",
                          textAlign: "start",
                          marginTop: "1rem",
                        }}
                      >
                        <h3>UI/UX Experience</h3>
                        <p style={{ marginTop: "1rem" }}>
                          Our expertise, as well as our passion for web design,
                          sets us apart from other agencies. Plus, our
                          experience demonstrates our ability.
                        </p>
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-1"></div>

                    <div
                      className="col-sm-12 col-md-5"
                      style={{ color: "white" }}
                    >
                      <div
                        className="row"
                        style={{ color: "#888888", fontSize: "30px", textAlign:"start" }}
                      >
                        04
                      </div>
                      <div className="row hover-effect">
                        <hr style={{ width: "90%" }} />
                      </div>

                      <div
                        className="row"
                        style={{
                          display: "flex",
                          justifyContent: "start",
                          textAlign: "start",
                          marginTop: "1rem",
                        }}
                      >
                        <h3>UI/UX Experience</h3>
                        <p style={{ marginTop: "1rem" }}>
                          Our expertise, as well as our passion for web design,
                          sets us apart from other agencies. Plus, our
                          experience demonstrates our ability.
                        </p>
                      </div>
                    </div>
                  </div>


                </div>
              </div>

              <div className="col-sm-2 col-md-2 col-lg-2 col-xl-1 col-xxl-2"></div>
            </div>
      </div>
      <Part3FirstSection />
    </>
  );
}
