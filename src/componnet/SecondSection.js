// import React from 'react';
// import '../asisste/SecondSection.css';
// import image1 from '../images/1qwe.png';
// import image2 from '../images/2qwe.png';
// import image3 from '../images/3qwe.png';

// export default function SecondSection() {
//   return (
//     <div className='SecondSection'>
//       <div className='FirstImage'>
//         <div className='image-container'>
//           <img
//             className='img img1'
//             src={image1}
//             width="100%"
            
         
          
//           />
//           <div className='text-overlay container-fluid'>
//             <div className='row'> 
//             <div  className="col-sm-1 col-md-1 col-lg-1 col-xl-1  col-xxl-2 "></div>

//               <div className='col-sm-11 col-md-11 col-lg-11 col-xl-11 col-xxl-10'>
//               <div className='top-text '>DEVELOPMENT | TECHNOLOGY</div>
            
//             <div className='bottom-text'>TECHNOLOGY PROCESS</div>
//               </div>
          
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className='SecoundImage'>
//         <div className='image-container'>
//           <img
//             className='img img2'
//             src={image2}
//             width="100%"
            
//           />
//           <div className='text-overlay container-fluid'>
//             <div className='row'> 
//             <div  className="col-sm-1 col-md-1 col-lg-1 col-xl-1  col-xxl-2 "></div>

//               <div className='col-sm-11 col-md-11 col-lg-11 col-xl-11 col-xxl-10'>
//               <div className='top-text '>TECHNOLOGY</div>
            
//             <div className='bottom-text'>UI FOR MUSIC WEBSITE</div>
//               </div>
          
//             </div>
//           </div>
//         </div>
//       </div>


//       <div className='ThirdImage'>
//         <div className='image-container'>
//           <img
//             className='img img3'
//             src={image3}
//             width="100%"
          
//           />

//           <div className='text-overlay container-fluid'>
//             <div className='row'> 
//             <div  className="col-sm-1 col-md-1 col-lg-1 col-xl-1  col-xxl-2 "></div>

//               <div className='col-sm-11 col-md-11 col-lg-11 col-xl-11 col-xxl-10'>
//               <div className='top-text '>DEVELOPMENT | DESIGN</div>
            
//             <div className='bottom-text'>WEBSITE FOR AGEN</div>
//               </div>
          
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }







import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../asisste/SecondSection.css';
import image1 from '../images/1qwe.png';
import image2 from '../images/2qwe.png';
import image3 from '../images/3qwe.png';
import { Link } from "react-router-dom";

const SecondSection = () => {


  
  
  const [caseSStady, setCaseSStady] = useState([]);

  useEffect(() => {
    // Fetch data from the API using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1010/categories/categories');
        // Assuming the response data is an array of objects with 'title' and 'image' properties
        console.log(response.data[0])
        setCaseSStady(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  const handleClick = (category) => {
    // Save the selected category in localStorage
    sessionStorage.setItem('selectedCategory', category);
  };

const dataArray = [
  {
    image: image1,
    topText: 'DEVELOPMENT | TECHNOLOGY',
    bottomText: 'TECHNOLOGY PROCESS',
    category: "DEVELOPMENT",
    link:'portfolio'
  },
  {
    image: image2,
    topText: 'TECHNOLOGY',
    bottomText: 'UI FOR MUSIC WEBSITE',
    category: "DESIGN",
    link:'portfolio'
  },
  {
    image: image3,
    topText: 'DESIGN',
    bottomText: 'WEBSITE FOR AGEN',
    category: "TECHNOLOGY",
    link:'portfolio'
  },
];


  return (
    <div className='SecondSection'>
      {caseSStady.map((item, index) => (
        
        <div className='image-container' key={index}>
          <Link className='Link' to="portfolio" onClick={() => handleClick(item.category)}>
          <img className={`img img${index + 1}`}     src={`http://localhost:1010/${item.imageCategoryPath}`} width="100%" />
        </Link>

          <div className='text-overlay container-fluid g-0'>
            <div className='row g-0'>
              <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2"></div>
             
              <div className='col-sm-11 col-md-11 col-lg-11 col-xl-11 col-xxl-7 HIGH-TEXT'>
              <Link className='Link' to="portfolio" onClick={() => handleClick(item.category)}>
                <div className='top-text'>{item.toptext}</div>
                <div className='bottom-text'>{item.bottomtext}</div>

              </Link>
              </div>
              <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-3"></div>
            </div>
          </div>
        </div>
        
      ))}
    </div>
  );
};

export default SecondSection;

