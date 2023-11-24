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








import React from 'react';
import '../asisste/SecondSection.css';
import image1 from '../images/1qwe.png';
import image2 from '../images/2qwe.png';
import image3 from '../images/3qwe.png';

const SecondSection = () => {



const dataArray = [
  {
    image: image1,
    topText: 'DEVELOPMENT | TECHNOLOGY',
    bottomText: 'TECHNOLOGY PROCESS',
  },
  {
    image: image2,
    topText: 'TECHNOLOGY',
    bottomText: 'UI FOR MUSIC WEBSITE',
  },
  {
    image: image3,
    topText: 'DEVELOPMENT | DESIGN',
    bottomText: 'WEBSITE FOR AGEN',
  },
];
  return (
    <div className='SecondSection'>
      {dataArray.map((item, index) => (
        <div className='image-container' key={index}>
          <img className={`img img${index + 1}`} src={item.image} width="100%" />

          <div className='text-overlay container-fluid g-0'>
            <div className='row g-0'>
              <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2"></div>
             
              <div className='col-sm-11 col-md-11 col-lg-11 col-xl-11 col-xxl-7 HIGH-TEXT'>
                <div className='top-text'>{item.topText}</div>
                <div className='bottom-text'>{item.bottomText}</div>
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

