
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

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


  const [logo, setLogo] = useState({})
  const [title, setTitle] = useState({})
  const [firstsectioncontentdata, setFirstsectioncontentdata] = useState([])
  const [secoundSectionContentData, setSecoundsectioncontentdata] = useState([])
  const [email, setEmail] = useState(''); // State for email input
  const [feedbackMessage, setFeedbackMessage] = useState(''); // State for feedback message
  const [socialLinks, setSocialLinks] = useState([]); // State for feedback message

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

  const handleSubscribeClick = async () => {
    if (!email.trim()) {
        setFeedbackMessage('Please enter an email address.');
        return;
    }
    if (!isValidEmail(email)) {
      setFeedbackMessage('Please enter a valid email address.');
      return;
  }

    try {
      const response = await axios.post('http://localhost:1010/footer/addfootersubscribeemail', { email });
      if (response.status === 200) {
        setFeedbackMessage('Subscribed successfully!');
        setEmail(''); // Clear the email input field
      } else {
        setFeedbackMessage('Failed to subscribe.');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      setFeedbackMessage('Error subscribing.');
    }
};





  useEffect(() => {
    // Fetch data from the API using Axios
    const fetchLogoData = async () => {
      try {
        const response = await axios.get('http://localhost:1010/logo/logoimg');
        // Assuming the response data is an array of objects with 'title' and 'image' properties
        console.log({logo: response.data[0]})
        setLogo(response.data[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchTitleData = async () => {
      try {
        const response = await axios.get('http://localhost:1010/footer/details');
        // Assuming the response data is an array of objects with 'title' and 'image' properties
        console.log({logo: response.data[0]})
        setTitle(response.data[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  

    const fetchFirstSectionContentData = async () => {
      try {
        const response = await axios.get('http://localhost:1010/footer/detailsfirstsectioncontent');
        // Assuming the response data is an array of objects with 'title' and 'image' properties
        console.log({logo: response.data[0]})
        setFirstsectioncontentdata(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  

    const fetchSecoundSectionContentData = async () => {
      try {
        const response = await axios.get('http://localhost:1010/footer/detailssecoundsecitoncontent');
        // Assuming the response data is an array of objects with 'title' and 'image' properties
        console.log({logo: response.data[0]})
        setSecoundsectioncontentdata(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  

    const fetchSocialLinksData = async () => {
      try {
        const response = await axios.get('http://localhost:1010/footericons/socialiconfooter');
        // Assuming the response data is an array of objects with 'title' and 'image' properties
        console.log({logo: response.data[0]})
        setSocialLinks(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchLogoData();
    fetchTitleData();
    fetchFirstSectionContentData();
    fetchSecoundSectionContentData();
    fetchSocialLinksData();
  }, []);


// Function to add protocol if missing
const addProtocol = (url) => {
  // Check if the link starts with a protocol
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    // If not, prepend 'http://' (you can adjust this logic based on your requirements)
    return `http://${url}`;
  }
  return url;
};

  return (
    <div className="container-fluid" style={{ backgroundColor: "black" }}>
      {/* col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2 */}
      {/* col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-9 */}
      {/* col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1*/}
      <div className="row" >
        <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2"></div>
        <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-9 ">

        <MDBFooter bgColor="black" className="text-center text-lg-start text-muted "
        style={{margin:"0" , padding:"0"}}
        >
          
            <MDBContainer fluid className="text-center text-md-start mt-5 ">
              <MDBRow className="mt-3">
                <MDBCol md="2" lg="2" xl="2" className=" mb-4 center1600">
                <Link to="/">
                  <img 
                   src={`http://localhost:1010/${logo.logoImg}`}
                 
                    
                  
                  width="70px" height="80px"  />
                  </Link>
                </MDBCol>

                <MDBCol md="3" lg="3" xl="3"
                  className="mx-auto mb-4"
                  style={{ color: "white" }}
                >
                  <h6 className="text-uppercase fw-bold mb-4">{title.footerFirstTitle}</h6>
                  {firstsectioncontentdata.map((item, index) => (
            <p key={index}>
              <Link to={item.path} className="text-reset custom-link">
                {item.name}
              </Link>
            </p>
          ))}
                </MDBCol>

                <MDBCol md="3" lg="3" xl="3"
                  className="mx-auto mb-4"
                  style={{ color: "white" }}
                >
                  <h6 className="text-uppercase fw-bold mb-4">{title.footerSecoundTitle}</h6>
                  {secoundSectionContentData.map((item, index) => (
            <p key={index}>
              {/* <Link to={item.path} style={{textDecoration:"none", color:"white"}} > */}
                {item.name}
              {/* </Link> */}
            </p>
          ))}
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3"
                  className="mx-auto mb-4"
                  style={{ color: "white" }}
                >
                  <h6 className="text-uppercase fw-bold mb-4">{title.footerThirdTitle}</h6>
                  <div class="input-group mb-2">
                  <input
            type="text"
            className="form-control"
            id="inlineFormInputGroup"
            placeholder="Get news & updates"
            style={{ backgroundColor: "black", border: "none", color: "white" }}
            value={email}
            onChange={handleEmailChange}
          />
          <button
            style={{ backgroundColor: "black", border: "none", color: "white", fontSize: "23px" }}
            className="input-group-text"
            onClick={handleSubscribeClick}
          >
            @
          </button>
        </div>
        {feedbackMessage && <p style={{ color: 'white' }}>{feedbackMessage}</p>}
       
                  
                  <p style={{ color: "#888888" }}>
                  {title.textUnderInput}
                  </p>

                
                </MDBCol>
              </MDBRow>
              
              <MDBRow>
  <MDBCol md="9" lg="9" xl="9">
    {/* Other content */}
  </MDBCol>

  <MDBCol md="3" lg="3" xl="3" >
    <MDBIcon icon="print" className="me-3 " />
    <div>
  {socialLinks.map((link, index) => (
    <a
      key={index}
      href={addProtocol(link.link)}
      className="social-icon"
      style={{ color: 'white', marginLeft: index > 0 ? '1rem' : '0' }}
    >
      <img  src={`http://localhost:1010/${link.icon}`} style={{height:"35px"}}/>
    </a>
  ))}
</div>
  </MDBCol>
</MDBRow>

            </MDBContainer>
          

          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" , color:"white"}}
          >
            {title.copyWriteText}
          </div>
        </MDBFooter>

        </div>

        <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1"></div>
      </div>
    </div>
  );
}
