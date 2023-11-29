// import React from 'react';
// import '../asisste/FiveSection.css';
// import Carousel from 'react-bootstrap/Carousel';

// export default function FiveSectionSlider() {
//   const products = [
//     {
//       id: 1,
//       title: 'Product 1',
//       subtitle: 'Description 1',
//       imageSrc: 'https://wgl-demo.net/bili/wp-content/uploads/2023/03/landing-4.jpg',
//     },
//     {
//       id: 2,
//       title: 'Product 2',
//       subtitle: 'Description 2',
//       imageSrc: 'https://wgl-demo.net/bili/wp-content/uploads/2023/03/landing-11.jpg',
//     },
//     {
//       id: 3,
//       title: 'Product 3',
//       subtitle: 'Description 3',
//       imageSrc: 'https://wgl-demo.net/bili/wp-content/uploads/2023/03/landing-4.jpg',
//     },
//     {
//       id: 4,
//       title: 'Product 4',
//       subtitle: 'Description 4',
//       imageSrc: 'https://wgl-demo.net/bili/wp-content/uploads/2023/03/landing-4.jpg',
//     },
//     {
//       id: 5,
//       title: 'Product 5',
//       subtitle: 'Description 5',
//       imageSrc: 'https://wgl-demo.net/bili/wp-content/uploads/2023/03/landing-11.jpg',
//     },
//     {
//       id: 6,
//       title: 'Product 6',
//       subtitle: 'Description 6',
//       imageSrc: 'https://wgl-demo.net/bili/wp-content/uploads/2023/03/landing-4.jpg',
//     },
//     {
//       id: 7,
//       title: 'Product 7',
//       subtitle: 'Description 7',
//       imageSrc: 'https://wgl-demo.net/bili/wp-content/uploads/2023/03/landing-4.jpg',
//     },
//     {
//       id: 8,
//       title: 'Product 8',
//       subtitle: 'Description 8',
//       imageSrc: 'https://wgl-demo.net/bili/wp-content/uploads/2023/03/landing-4.jpg',
//     },
//     {
//       id: 9,
//       title: 'Product 9',
//       subtitle: 'Description 9',
//       imageSrc: 'https://wgl-demo.net/bili/wp-content/uploads/2023/03/landing-11.jpg',
//     },
//     {
//       id: 10,
//       title: 'Product 10',
//       subtitle: 'Description 10',
//       imageSrc: 'https://wgl-demo.net/bili/wp-content/uploads/2023/03/landing-4.jpg',
//     },
//     ,
//     {
//       id: 11,
//       title: 'Product 10',
//       subtitle: 'Description 10',
//       imageSrc: 'https://wgl-demo.net/bili/wp-content/uploads/2023/03/landing-4.jpg',
//     },
//     {
//       id: 12,
//       title: 'Product 10',
//       subtitle: 'Description 10',
//       imageSrc: 'https://wgl-demo.net/bili/wp-content/uploads/2023/03/landing-4.jpg',
//     },
//   ];

//   // Split the products into groups of three
//   const groupedProducts = [];
//   for (let i = 0; i < products.length; i += 3) {
//     groupedProducts.push(products.slice(i, i + 3));
//   }

//   return (
//     <div className="product-slider">
//       <Carousel className="cont" controls={false} indicators={false} interval={2000}>
//         {groupedProducts.map((group, index) => (
//           <Carousel.Item key={index}>
//             <div className="d-flex justify-content-between">
//               {group.map((product) => (
//                 <div key={product.id} className="product-card">
//                   <img src={product.imageSrc} alt={product.title} />
//                   <Carousel.Caption>
//                     <h3>{product.title}</h3>
//                     <p>{product.subtitle}</p>
//                   </Carousel.Caption>
//                 </div>
//               ))}
//             </div>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//   );
// }









import React, { useState } from 'react';
import '../asisste/FiveSection.css';
import Carousel from 'react-bootstrap/Carousel';

export default function FiveSectionSlider() {
  const products = [
    {
      id: 1,
      date:'March 23, 2022',
      title: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem Product 1',
      subtitle: 'Read more 1',
      imageSrc: 'https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-1-1-740x700.jpg',
    },
    {
      id: 2,
      date:'March 23, 2022',
      title: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem Product 2',
      subtitle: 'Read more 2',
      imageSrc: 'https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-3-740x700.jpg',
    },
    {
      id: 3,
      date:'March 23, 2022',
      title: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem Product 3',
      subtitle: 'Read more 3',
      imageSrc: 'https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-5-740x700.jpg',
    },
    {
      id: 4,
      date:'March 23, 2022',
      title: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem Product 4',
      subtitle: 'Read more 4',
      imageSrc: 'https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-2-1-740x700.jpg',
    },
    {
      id: 5,
      date:'March 23, 2022',
      title: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem Product 5',
      subtitle: 'Read more 5',
      imageSrc: 'https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-6-740x700.jpg',
    },
    {
      id: 6,
      date:'March 23, 2022',
      title: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem Product 6',
      subtitle: 'Read more 6',
      imageSrc: 'https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-4-740x700.jpg',
    },
    {
        id: 7,
        date:'March 23, 2022',
        title: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem Product 4',
        subtitle: 'Read more 4',
        imageSrc: 'https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-7-740x700.jpg',
      },
      {
        id:8,
        date:'March 23, 2022',
        title: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem Product 5',
        subtitle: 'Read more 5',
        imageSrc: 'https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-8-740x700.jpg',
      },
      {
        id: 9,
        date:'March 23, 2022',
        title: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem Product 6',
        subtitle: 'Read more 6',
        imageSrc: 'https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-3-740x700.jpg',
      },
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const calculateImageHeight = (slideIndex, productIndex) => {
    if (slideIndex % 2 === 0) {
      return productIndex === 1 ? '30rem' : '25rem';
    } else {
      return productIndex === 1 ? '25rem' : '30rem';
    }
  };

  // Split the products into groups of three
  const groupedProducts = [];
  for (let i = 0; i < products.length; i += 3) {
    groupedProducts.push(products.slice(i, i + 3));
  }

  return (
    <div className="product-slider">
      <Carousel className="cont" activeIndex={index} onSelect={handleSelect} interval={3000} controls={false}>
        {groupedProducts.map((group, slideIndex) => (
          <Carousel.Item key={slideIndex}>
            <div className="d-flex justify-content-center">
              {group.map((product, productIndex) => (
                <div key={product.id} className="product-card">
                  <img
                    src={product.imageSrc}
                    alt={product.title}
                    style={{
                      height: calculateImageHeight(slideIndex, productIndex), borderRadius:"2%" , display:"flex", justifyContent:"start" ,objectPosition: "center center",
                      objectFit: "cover"
                    }}
                  />
                 
                 <div className="image-text" style={{marginTop:"2rem"}} >

                    <p style={{color:"#888888", fontSize:'18px', display:"flex", justifyContent:"start"}}>{product.date}- <a>DEVELOPMENT</a></p>

                    <p style={{color:"white", fontSize:'18px',display:"flex", justifyContent:"start" , textAlign:'start' }} > {product.title}</p>

                    <p className="subtitle" style={{color:"#FF7425", fontSize:'18px', fontWeight:"500", display:"flex", justifyContent:"start" }}>{product.subtitle}</p>

                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>


           {/* Move the controller (dots) below the Carousel component */}
           <div className="carousel-dots">
        <ol>
          {groupedProducts.map((_, dotIndex) => (
            <li
              key={dotIndex}
              className={index === dotIndex ? "active" : ""}
              onClick={() => setIndex(dotIndex)}
            />
          ))}
        </ol>
      </div>
      <ol className="carousel-dots">
        {groupedProducts.map((_, dotIndex) => (
          <li
            key={dotIndex}
            className={index === dotIndex ? "active" : ""}
            onClick={() => setIndex(dotIndex)}
          />
        ))}
      </ol>
    </div>
  );
}
