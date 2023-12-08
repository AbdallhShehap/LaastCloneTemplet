
// import React from "react";
// import Marquee from "react-fast-marquee";
// import "../asisste/Part3FirstSection.css";


// export default function YourCustomMarquee() {
//   return (
//     <Marquee
//       style={{ height: "89%" }}
//       className="your-custom-class"
//       gradient={false}
//       speed={70}
//       pauseOnHover={true}
//     >
//       {/* You can add your images or text inside here */}

//       <p className="text1" style={{ color: "white" }}>
//         {" "}
//         LATEST CASES{" "}
//       </p>

//       <img
//         src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/arrow_orange.png"
//         alt="Arrow"
//         height={"90px"}
//         width={"90px"}
//       />

//       <p className="text2" style={{ color: "white" }}>
//         {" "}
//         LATEST CASES{" "}
//       </p>

//       <p className="text1" style={{ color: "white" }}>
//         {" "}
//         LATEST CASES{" "}
//       </p>

//       <img
//         src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/arrow_orange.png"
//         alt="Arrow"
//         height={"90px"}
//         width={"90px"}
//       />

//       <p className="text2" style={{ color: "white" }}>
//         {" "}
//         LATEST CASES{" "}
//       </p>
//     </Marquee>
//   );
// }



import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import axios from 'axios';
import '../asisste/Marquee.css';

const CustomMarquee = () => {
  const [marqueeItems, setMarqueeItems] = useState([]);

  useEffect(() => {
    // Fetch data from the API using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1010/secoundmarquee/secoundmarquee');
        // Assuming the response data is an array of objects with 'title' and 'image' properties
        console.log(response.data[0])
        setMarqueeItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  
  return (
    <Marquee
          style={{ height: "89%" }}
           className="MarqueeFirst"
         gradient={false}
          speed={70}
          pauseOnHover={false}
         >
      {marqueeItems.map((item) => (
        <React.Fragment key={item['id-first-marquee']}>
          <p className="textMarqueeFirst" style={{ color: 'white' }}>
          {item['title-secound-marquee']}
              <img
               src={`http://localhost:1010/${item.imageSecoundMarqueePath}`}
            
                height="70px"
                width="70px"
              />
          </p>
      
         
        </React.Fragment>
      ))}
    </Marquee>
  );
};

export default CustomMarquee;


