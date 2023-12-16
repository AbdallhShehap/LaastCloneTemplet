import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../asisste/MainBackground.css";
import "../asisste/font.css";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function ResponsiveAutoExample() {
  const [socialMediaLinks, setOurBenefitsFixed] = useState([]);
  const [mainSectionTextImg, setMainSectionTextImg] = useState({
});
  const [mainSectionIcon, setMainSectionIcon] = useState({
  });



  // Function to add protocol if missing
const addProtocol = (link) => {
  // Check if the link starts with a protocol
  if (!link.startsWith('http://') && !link.startsWith('https://')) {
    // If not, prepend 'http://' (you can adjust this logic based on your requirements)
    return `http://${link}`;
  }
  return link;
};


  const fetchFixdContent = async () => {
    try {
      const response = await axios.get('http://localhost:1010/mainsection/social');
      setOurBenefitsFixed(response.data);
    } catch (error) {
      console.error('Error fetching main content:', error);
    }
  };

  const fetchMainSectionTextImg = async () => {
    try {
      const response = await axios.get('http://localhost:1010/mainsection/textmainsection/1');
      setMainSectionTextImg(response.data);
    } catch (error) {
      console.error('Error fetching main content:', error);
    }
  };

  const fetchMainSectionIcon = async () => {
    try {
      const response = await axios.get('http://localhost:1010/mainsection/iconmainsection');
      setMainSectionIcon(response.data[0]);
    } catch (error) {
      console.error('Error fetching main content:', error);
    }
  };




  
  
  useEffect(() => {



    fetchFixdContent();
    fetchMainSectionTextImg();
    fetchMainSectionIcon();

  }, []);



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
    <a className="vertical-words" href={addProtocol(link)} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
      {name}
    </a>
  </div>
))}
     
    </div>
          </div>

          <div className="col-sm-11 col-md-11 col-lg-11 col-xl-10 col-xxl-8 HIGH-TEXT"
           
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
                  {mainSectionTextImg.text1}
                  {/* HIGH END  */}






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

                  {mainSectionIcon.icon  && (

                    <img
                      className="imgicon"
                      src={`http://localhost:1010/${mainSectionIcon.icon}`}
                      style={{}}
                    />
                    
                  )}

                  </div>


                  {mainSectionTextImg.text2  && (


                  <div
                    className=" text"
                    style={{
                      color: "white",
                      marginLeft: "10px",
                    }}
                  >
                    <div class="wordart italic-outline">
                      <span class="text2">
                      {mainSectionTextImg.text2}
                        {/* CREATIVE */}
                        </span>
                    </div>
                  </div>
                  )}


                </div>



                {mainSectionIcon.icon && (

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

                {mainSectionTextImg.text3}
                  {/* AGENCY */}

                  
                </div>

                )}

                {!mainSectionIcon.icon && (

                <div className="row"
                  style={{
                    fontSize: "130px",
                    color: "white",
                    fontWeight: "600",
                    display:"flex",
                    justifyContent:'start',
                    // lineHeight:"100px"
                  }}
                >
                {mainSectionTextImg.text3}
                  {/* AGENCY */}

                  
                </div>

                )}
                
            

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
                        
                        {mainSectionTextImg.paragraph}


                          {/* Over 15 years in the game & build successful,
                          profitable products */}
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
                                        <Link to={mainSectionTextImg.buttonLink}>

                    <div className="circle-btn"></div>
                    <span
                      className="circle-btnspan"
                      style={{ color: "white", fontSize: "20px" }}
                    >
                         {mainSectionTextImg.buttonName}
                      {/* GET IN TOUCH */}
                    </span>
                  </Link>
                  </div>

                  <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-5"></div>
                </div>

                </div>



              </div>
            </div>
          </div>
          {/* <div className="col-sm-4 col-md-4 col-lg-4 col-xl-2" ></div> */}

          {/* <div className="col-sm-4 col-md-4 col-lg-4 col-xl-1 col-xxl-1 "></div> */}


        </div>
      </div>
    </div>
  );
}

export default ResponsiveAutoExample;
