import React from "react";
import "../asisste/blog.css";
import Menu from "../componnet/Menu";
import Footer from "../componnet/Footer";

export default function Blog() {
  const blogData = [
    {
      id: 1,
      date: "March 23, 2022",
      title: "Does My Website Need a Blog?",
      ReadMore: "Read more 1",
      imageSrc:
        "https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-1-1-740x700.jpg",
    },
    {
      id: 2,
      date: "March 23, 2022",
      title: "Best 15 App for Digital Transformation",
      ReadMore: "Read more 2",
      imageSrc:
        "https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-3-740x700.jpg",
    },
    {
      id: 3,
      date: "March 23, 2022",
      title: "A Simple Social Media Marketing Checklist",
      ReadMore: "Read more 3",
      imageSrc:
        "https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-5-740x700.jpg",
    },
    {
      id: 4,
      date: "March 23, 2022",
      title: "You’re Still Not Using Digital Tools?",
      ReadMore: "Read more 4",
      imageSrc:
        "https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-2-1-740x700.jpg",
    },
    {
      id: 5,
      date: "March 23, 2022",
      title: "Digital Marketing for Online Business",
      ReadMore: "Read more 5",
      imageSrc:
        "https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-6-740x700.jpg",
    },
    {
      id: 6,
      date: "March 23, 2022",
      title: "Transforming Challenges into Opportunities",
      ReadMore: "Read more 6",
      imageSrc:
        "https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-4-740x700.jpg",
    },
    {
      id: 7,
      date: "March 23, 2022",
      title: "8 Effective Inbound Marketing Examples",
      ReadMore: "Read more 7",
      imageSrc:
        "https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-7-740x700.jpg",
    },
    {
      id: 8,
      date: "March 23, 2022",
      title: "5 Web Design Tools & Software Apps",
      ReadMore: "Read more 8",
      imageSrc:
        "https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-3-740x700.jpg",
    },
    {
      id: 9,
      date: "March 23, 2022",
      title: "5 Winning Voice Search Marketing Tips",
      ReadMore: "Read more 9",
      imageSrc:
        "https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-8-740x700.jpg",
    },
  ];

  return (
    <div className="blogPage container-fluid">
    <div className="row">
      <div className=" col-lg-12 col-xl-12" style={{padding:"0"}}>
      <Menu />

      </div>
    </div>

      <div className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          color: "white",
          fontSize: "53px",
          fontWeight: "500",
          margin: "100px",
        }}
      >
        Blog Grid
      </div>

      <div className="row " style={{}}>
  {/* col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2 */}
      {/* col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-9 */}
      {/* col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1*/}

        <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2"></div>

        <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-8">
          <div className="container-fluid">
            <div className="row">
              {blogData.map((product) => (
                <div key={product.id} className="col-4" style={{marginBottom:"2rem",cursor: "pointer"
              }}>
                  <div className="blog-card">
                    <img
                      className="img-blog-card"
                      src={product.imageSrc}
                      alt={product.title}
                      style={{
                        //   display: 'flex',
                        //   justifyContent: 'start',
                        // borderRadius: "2%",
                        padding:"0",
                        margin:"0"
                      }}
                    />

                    <div
                      className="blog-image-text"
                      style={{ marginTop: "1rem" }}
                    >
                      <p
                        style={{
                          color: "#888888",
                          fontSize: "14px",
                          // display: 'flex',
                          // justifyContent: 'start',
                          textAlign: "start",
                        }}
                      >
                        {product.date}-{" "}
                        <a className="hover-link"> DEVELOPMENT</a>
                      </p>

                      <p
                      className="title-blog"
                        style={{
                        
                        }}
                      >
                        {product.title}
                      </p>

                      <p
                        className="ReadMoreBlog"
                        style={{
                          color: "orange",
                          fontSize: "18px",
                          fontWeight: "500",
                          textAlign: "start",
                        }}
                      >
                        {product.ReadMore}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className=" col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2"></div>
      </div>

      <div className="row" style={{display:"flex", justifyContent:"center", marginBottom:"100px", marginTop:"50px",  cursor: "pointer"
}}>
        <div className="col-2" style={{}} >


        <div class="blogcircle-container" style={{ position: "relative" }}>
  <div className="blogcircle-btn"></div>
  <span className="blogcircle-btnspan" style={{ color: "white", fontSize:"20px" }}>
    LOAD MORE NEWS
  </span>
</div>



        </div>
      </div>

      <div className="row">
        <div className="col-12"></div>
        <Footer />
      </div>
    </div>
  );
}
