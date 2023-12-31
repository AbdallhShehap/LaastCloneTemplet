
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../asisste/FirstSection.css";

export default function TwoColumnLayout() {
  const [activeSection, setActiveSection] = useState(null);
  const [ourBenefitsFixed, setOurBenefitsFixed] = useState({});
  const [ourBenefitsImgFixed, setOurBenefitsImgFixed] = useState({});


  const [ourBenfits, setOurBenfits] = useState([]);

  useEffect(() => {

    const fetchOurBenefitsImgFixed = async () => {
      try {
        const response = await axios.get('http://localhost:1010/ourbenfits/imgourbenefits');
        setOurBenefitsImgFixed(response.data[0]);
      } catch (error) {
        console.error('Error fetching main content:', error);
      }
    };
    
    const fetchFixdContent = async () => {
      try {
        const response = await axios.get('http://localhost:1010/ourbenfits/textourbenefits');
        setOurBenefitsFixed(response.data[0]);
      } catch (error) {
        console.error('Error fetching main content:', error);
      }
    };



    // Fetch data from the API using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1010/ourbenfits/ourbenfitscontent');
        // Assuming the response data is an array of objects with 'title' and 'image' properties
        console.log(response.data[0])
        setOurBenfits(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchFixdContent();
    fetchData();
    fetchOurBenefitsImgFixed();
  }, []);




  const toggleReadMore = (section) => {
    if (activeSection === section) {
      // If clicking the same section, close it.
      setActiveSection(null);
    } else {
      if (activeSection !== null) {
        // If another section is open, close it first.
        setActiveSection(null);
        setTimeout(() => {
          // Then open the new section after a delay.
          setActiveSection(section);
        }, 350); // This delay should be less than the total transition time to give a smooth effect.
      } else {
        // If no section is active, open the new one directly.
        setActiveSection(section);
      }
    }
  };
  

  // const sections = [
  //   {
  //     id: 1,
  //     title: "High Standarts",
  //     content:
  //       "Through our years of experience, we've also learned that while each channel has its own set of advantages, they all work best when strategically paired with other channels.",
  //   },
  //   {
  //     id: 2,
  //     title: "Focus on People",
  //     content:
  //       "Through our years of experience, we've also learned that while each channel has its own set of advantages, they all work best when strategically paired with other channels.",
  //   },
  //   {
  //     id: 3,
  //     title: "Different Thinking",
  //     content:
  //       "Through our years of experience, we've also learned that while each channel has its own set of advantages, they all work best when strategically paired with other channels.",
  //   },
  // ];

  return (
    <div className="container-fluid Part2FirstSection">
      <div className="row two-column-container align-items-start">
      {/* <div  className="col-sm-1 col-md-1 col-lg-1 col-xl-1  col-xxl-2 "></div> */}
      {/* col-sm-11 col-md-11 col-lg-11 col-xl-11 col-xxl-10 */}
        <div className="col-sm-11 col-md-6 col-lg-4 col-xl-4 col-xxl-6 left-side">
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
           {ourBenefitsFixed.sectionTitile}
          </p>
          <p
            style={{
              color: "white",
              
              fontSize: "30px",
              fontWeight: "700",
              textAlign: "start",
              marginBottom: "3rem",
              fontFamily:"sans-serif",
              cursor: "pointer"

            }}
          >
             {ourBenefitsFixed.sectionSubtitile}
          </p>
          {ourBenfits.map((section) => (
      <div key={section.id}>
        <p
          className={`Read ${activeSection === section.id ? 'active' : ''}`}
          onClick={() => toggleReadMore(section.id)}
          style={{
            color: "white",
            fontFamily:"sans-serif",
            fontSize: "25px",
            textAlign: "start", cursor: "pointer"
            
          }}
        >
          {activeSection === section.id ? "-" : "+"} {section.title}
        </p>
        <div className="section-wrapper">
          <div
            className={`section-content ${
              activeSection === section.id ? "show" : ""
            }`}
          style={{textAlign:"start", cursor: "pointer"}}>
            {section.content}
          </div>
        </div>
      </div>
    ))}
        </div>

        

        <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-6 right-side">
          {ourBenefitsImgFixed.imgSection && (

            <img
              className="right-side-img"
              src={`http://localhost:1010/${ourBenefitsImgFixed.imgSection}`}
  
              alt="Your Image"
  
            />
          )
          }
        </div>
      </div>
    </div>
  );
}

// {sections.map((section) => (
//   <Row key={section.id}>
//     <p
//       style={{
//         color: "#888888",
//         fontSize: "24px",
//         fontWeight: "700",

//       }}
//      >
//       <span
//         className="Read"
//         onClick={() => toggleReadMore(section.id)}
//         style={{
//           cursor: "pointer",
//           color: "white",
//           fontFamily: "Arimo",
//           fontSize: "28px",
//           fontWeight: "700",
//           // marginLeft: "1rem",
//           // marginBottom:"10%"
//         }}
//          >
//         <span
//           className={activeSection === section.id ? "rotate180" : ""}
//         >
//           {activeSection === section.id ? "-" : "+"}
//         </span>{" "}
//         {section.title}
//       </span>
//     </p>

//     <div
//       className={`read-more-content ${
//         activeSection === section.id ? "open" : ""
//       }`}
//       >
//       <div
//         style={{
//           color: "#888888",
//           fontSize: "16px",
//           display: "flex",
//           // marginLeft: "7rem",
//           textAlign: "start",
//         }}
//        >
//         {section.content}
//       </div>
//     </div>

//   </Row>
// ))}
