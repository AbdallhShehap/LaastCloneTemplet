import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../asisste/MainBackground.css";
import "../asisste/font.css";
import Menu from "./Menu";
import { Link } from "react-router-dom";


function ResponsiveAutoExample() {

  const socialMediaLinks = [
    { name: "FACEBOOK", link: "https://facebook.com" },
    { name: "TWITTER", link: "https://twitter.com" },
    { name: "INSTAGRAM", link: "https://instagram.com" },
  ];
  return (
    <div>
      <div className="container-fluid" style={{}}>
        <div className="row">
          <Menu />
        </div>

        <div className="row firstText" style={{ marginTop: "4rem" }}>
          <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1  col-xxl-2 ">
          <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2">
      {socialMediaLinks.map(({ name, link }, index) => (
        <div key={index}>
          <Link  className="vertical-words" to={link} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
            {name}
          </Link>
        </div>
      ))}
    </div>
          </div>

          <div className="col-sm-11 col-md-11 col-lg-11 col-xl-10 col-xxl-7 HIGH-TEXT"
           
          >
            <div className="container-fluid"  style={{}}>
              <div className="row"
                style={{
                  fontSize: "130px",
                  color: "white",
                
                  fontWeight: "600",
                }}
              >
                <div className="row"
                  style={{
                    fontSize: "130px",
                    color: "white",
                      paddingTop:'0',
                      paddingBottom:'0',
                    fontWeight: "600"
                  }}
                >
                  HIGH END 
                
                <div className=" textImgContainer"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "start",
                    lineHeight:"100px"
                  }}
                >
                  <div>
                    <img
                      className="imgicon"
                      src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/arrow_orange.png"
                      style={{}}
                    />
                  </div>

                  <div
                    className=" text"
                    style={{
                      color: "white",
                      marginLeft: "10px",
                    }}
                  >
                    <div class="wordart italic-outline">
                      <span class="text2">CREATIVE</span>
                    </div>
                  </div>
                </div>



                <div className="row"
                  style={{
                    fontSize: "130px",
                    color: "white",
                    fontWeight: "600",
                    display:"flex",
                    justifyContent:'start',
                    lineHeight:"100px"
                  }}
                >
               
                  AGENCY

                  
                </div>

                <div className="row" style={{
                        marginTop:'30px'
                   }}>
                  <div className="paragraph col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-4">
                    <div
                      style={{
                        color: "white",
                        fontWeight: "600",
                        display: "flex",
                        fontFamily: "sans-serif"
                      }}
                    >
                      <div>
                        <p style={{ fontSize: "15px", textAlign: "start" , maxWidth:"350px"}}>
                          Over 15 years in the game & build successful,
                          profitable products
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-3 circle-container"
                    style={{
                      fontSize: "",
                      color: "white",
                      fontWeight: "600",
                      position: "relative",
                      cursor: "pointer"
                    }}
                  >
                    <div className="circle-btn"></div>
                    <span
                      className="circle-btnspan"
                      style={{ color: "white", fontSize: "20px" }}
                    >
                      GET IN TOUCH
                    </span>
                  </div>

                  <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-5"></div>
                </div>

                </div>



              </div>
            </div>
          </div>
          {/* <div className="col-sm-4 col-md-4 col-lg-4 col-xl-2" ></div> */}

          <div className="col-sm-4 col-md-4 col-lg-4 col-xl-1 col-xxl-3 "></div>


        </div>
      </div>
    </div>
  );
}

export default ResponsiveAutoExample;
