
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Part1ThirdSection from "./Part1ThirdSection";
import "../asisste/ThirdSection.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Part3FirstSection from "./SecoundMarquee";
import { Link } from "react-router-dom";

export default function ThirdSection() {


  
  const [thirdScircle, setThirdScircle] = useState([]);
  const [sectionData, setSectionData] = useState([]);


  const [fexedData, setFexedData] = useState({
    titleSection: "WHAT WE OFFER",
    title: "Giving Your Business Some Great Ideas",
    buttonLink: "", 
    buttonName: "MORE SERVICES"
  });


  const fetchSectionData = async () => {
    try {
      const response = await axios.get('http://localhost:1010/details/blogs');
      setSectionData(response.data);
    } catch (error) {
      console.error('Error fetching section data:', error);
    }
  };


  useEffect(() => {
    // Fetch data from the API using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1010/details/details');
        // Assuming the response data is an array of objects with 'title' and 'image' properties
        console.log(response.data[0])
        setThirdScircle(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Fetch data from the API using Axios
    const fetchFexedData = async () => {
      try {
        const response = await axios.get('http://localhost:1010/fixeddetails/details');
        const data = response.data;
        setFexedData({
          titleSection: data.titleSection,
          title: "Giving Your Business Some Great Ideas",
          buttonLink: "", 
          buttonName: "MORE SERVICES"
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchFexedData();
    fetchSectionData();
  }, []);

  // const sections = [
  //   { title: "Years of", text: "Experience", number: 10 },
  //   { title: "Skilled", text: "Professionals", number: 18 },
  //   { title: "Visited", text: "Conferences", number: 32 },
  //   { title: "Projects", text: "Worldwide", number: 1, displayK: true },
  // ];

  // fontFamily:"sans-serif"
  return (
    <>
      <div className="container-fluid ThirdSection">
        <div className="row" style={{marginBottom:"50px", marginTop:"50px"}}>
         
          <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2"></div>

          <div className="col-sm-10 col-md-10 col-lg-10 col-xl-11 col-xxl-9 HIGH-TEXT" style={{paddingLeft:"0"}}>
          <div className="row">
            {thirdScircle.map((section, index) => (
              <div key={index} className="col thirdSwordart thirdSitalic-outline">
                <span className="thirdStext">
                  <Part1ThirdSection
                    title={section.text1}
                    text={section.text2}
                    number={section.number}
                    displayK={section.displayK}
                  />
                </span>
              </div>
            ))}
          </div>
          </div>

          <div className="col-sm-1 col-md-1 col-lg-1 col-xl-0 col-xxl-1"></div>

        </div>

            <div className="row" >
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
      {fexedData.titleSection}
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

      <Link to='portfolio'>
    <div className="thirdScircle-container" style={{position:"relative"}} >
      {/* <div style={{ display: "flex", justifyContent: "start" }}>
        <button class="circlebtn">GET_IN_TOUCH</button>
      </div> */}

      <div className="thirdScircle-btn"></div>
        <span className="thirdScircle-btnspan"  style={{ color: "white", fontSize:"20px" }}>MORE SERVICES</span>
    </div>
           </Link>



  </div>
  <div className="col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-6">
  <div className="container-fluid">
  <div className="row">
  {sectionData.map((section, index) => (
    <div key={section.id} className={`col-sm-12 col-md-5${index % 2 !== 0 ? ' offset-md-1' : ''} section-container`} style={{ color: "white" }}>
      <div className="row" style={{ color: "#888888", fontSize: "30px", textAlign: "start" }}>
        {index + 1 < 10 ? `0${index + 1}` : index + 1}
      </div>
      <hr className="horizontal-line" />
      <h3>{section.title}</h3>
      <p className="description-paragraph">{section.description}</p>
    </div>
  ))}
</div>

  </div>
</div>


              <div className="col-sm-2 col-md-2 col-lg-2 col-xl-1 col-xxl-1"></div>
            </div>
      </div>
      <Part3FirstSection />
    </>
  );
}


{/*            
              <div className="col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-6" >
              <div className="container-fluid">
  <div className="row">
    {sectionData.map((section, index) => (
      <React.Fragment key={section.id}>
        <div className="col-sm-12 col-md-5" style={{ color: "white" }}>
          <div className="row" style={{ color: "#888888", fontSize: "30px", textAlign: "start" }}>
            {index + 1 < 10 ? `0${index + 1}` : index + 1}
          </div>
          <div className="row hover-effect">
            <hr style={{ width: "90%" }} />
          </div>
          <div className="row" style={{ display: "flex", justifyContent: "start", textAlign: "start", marginTop: "1rem" }}>
  <h3>{section.title}</h3>
  <p className="wrap-text" style={{ marginTop: "1rem" }}>{section.description}</p>
</div>

        </div>
        {index % 2 === 0 && <div className="col-sm-12 col-md-1"></div>}
      </React.Fragment>
    ))}
  </div>
</div>

              </div> */}

//               <div className="col-sm-2 col-md-2 col-lg-2 col-xl-1 col-xxl-1"></div>
//             </div>
//       </div>
//       <div>

//       <Part3FirstSection />
//       </div>
//     </>
//   );
// }









