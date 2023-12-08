import React, { useEffect, useState } from 'react';
import '../asisste/MarqueeLast.css'
import axios from 'axios';
import Marquee from "react-fast-marquee";

export default function Part3FiveSection() {

  const [marqueeItems, setMarqueeItems] = useState([]);
  const [topItems, setTopItems] = useState([]);
  const [bottomItems, setBottomItems] = useState([]);

  useEffect(() => {
    // Fetch data from the API using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1010/thirdmarquee/thirdmarquee');
        // Assuming the response data is an array of objects with 'title' and 'image' properties
        console.log(response.data[0])
        setMarqueeItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchDataTopCircle = async () => {
      try {
        const responseTopCircle = await axios.get('http://localhost:1010/thirdmarquee/topcircleimg');
        // Assuming the response data is an array of objects with 'title' and 'image' properties
        console.log(responseTopCircle.data[0])
        setTopItems(responseTopCircle.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchDataBottomCircle = async () => {
      try {
        const responseTopCircle = await axios.get('http://localhost:1010/thirdmarquee/bottomcircleimg');
        // Assuming the response data is an array of objects with 'title' and 'image' properties
        console.log(responseTopCircle.data[0])
        setBottomItems(responseTopCircle.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    fetchDataTopCircle();
    fetchDataBottomCircle();
  }, []);



  return (
    <div className="Part3FivetSection">
        {/* <img src={`http://localhost:1010/${topItems.topCircleImg1Path}`} style={{width:"100%" , height:"100%", borderRadius: '50%'}}/> */}
        <div className="top-circles">
        {topItems.map((item, index) => (
          <div key={index} className={`circle circle${index + 1}`}>
            <img 
              src={`http://localhost:1010/${item.topCircleImgPath}`} 
              style={{width:"100%" , height:"100%", borderRadius: '50%'}}
              alt={`Circle ${index + 1}`}
            />
          </div>
        ))}
      </div>


      <Marquee
          style={{ height: "89%" }}
           className="MarqueeLast"
         gradient={false}
          speed={70}
          pauseOnHover={false}
         >
      {marqueeItems.map((item, index) => (
        <React.Fragment key={index}>
          <p className="textMarqueeLast" style={{ color: 'white' }}>
            {item['title-third-marquee']}
              <img
            src={`http://localhost:1010/${item.imageThirdMarqueePath}`}

               
                alt={item.title}
                height="70px"
                width="70px"
              />
          </p>
      
         
        </React.Fragment>
      ))}
    </Marquee>




    <div className="bottom-circles">
        {bottomItems.map((item, index) => (
          <div key={index} className={`circle circle4`}> {/* Adjusted class name for unique styling */}
            <img 
              src={`http://localhost:1010/${item.bottomCircleImgPath}`} 
              style={{width:"100%" , height:"100%", borderRadius: '50%'}}
              alt={`Bottom Circle ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
