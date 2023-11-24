import React from 'react'
import '../asisste/MarqueeLast.css'
import Marquee from "react-fast-marquee";

export default function Part3FiveSection() {

  const marqueeLastItems = [
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
    <div className="Part3FivetSection">
      <div className="top-circles">

        <div className="circle circle1"> 
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShsXzXaqNuX1q93MJooC4o4bcvFhTx04x1WQ&usqp=CAU' style={{width:"100%" , height:"100%", borderRadius: '50%'}}/>
        
        </div>

        <div className="circle circle2"> 
        <img src='https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528' style={{width:"100%" , height:"100%", borderRadius: '50%'}}/>
        </div>

        <div className="circle circle3"> 
        <img src='https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528' style={{width:"100%" , height:"100%", borderRadius: '50%'}}/>
        
        </div>

      </div>


      <Marquee
          style={{ height: "89%" }}
           className="MarqueeLast"
         gradient={false}
          speed={70}
          pauseOnHover={false}
         >
      {marqueeLastItems.map((item, index) => (
        <React.Fragment key={index}>
          <p className="textMarqueeLast" style={{ color: 'white' }}>
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




      <div className="bottom-circles">
        <div className="circle circle4"><img src='https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528' style={{width:"100%" , height:"100%", borderRadius: '50%'}}/></div>
        <div className="circle"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShsXzXaqNuX1q93MJooC4o4bcvFhTx04x1WQ&usqp=CAU' style={{width:"100%" , height:"100%", borderRadius: '50%'}}/></div>
      </div>
    </div>
  );
}
