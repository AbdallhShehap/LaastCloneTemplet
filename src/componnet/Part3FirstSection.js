
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




import React from 'react';
import Marquee from 'react-fast-marquee';
import '../asisste/Marquee.css'; 

const CustomMarquee = () => {
  const marqueeItems = [
    {
      title: 'LATEST CASES 1',
      image: 'https://wgl-demo.net/bili/wp-content/uploads/2022/03/arrow_orange.png',
      
    },
    {
      title: 'LATEST CASES 2',
      image: 'https://wgl-demo.net/bili/wp-content/uploads/2022/03/arrow_orange.png',
      
    },
    {
      title: 'LATEST CASES 3',
      image: 'https://wgl-demo.net/bili/wp-content/uploads/2022/03/arrow_orange.png',
      
    },
    {
      title: 'LATEST CASES 4',
      image: 'https://wgl-demo.net/bili/wp-content/uploads/2022/03/arrow_orange.png',
      
    },
  ];
  
  
  return (
    <Marquee
          style={{ height: "89%" }}
           className="MarqueeFirst"
         gradient={false}
          speed={70}
          pauseOnHover={false}
         >
      {marqueeItems.map((item, index) => (
        <React.Fragment key={index}>
          <p className="textMarqueeFirst" style={{ color: 'white' }}>
            {item.title}
              <img
                src={item.image}
                alt={item.title}
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


