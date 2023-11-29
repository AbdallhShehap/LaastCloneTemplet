import React from "react";
import "../asisste/contact.css";
import Menu from "../componnet/Menu";
import Contact1 from "../componnet/Contact1";
import Contact2 from "../componnet/Contact2";
import Map from "../componnet/Map";
import Footer from "../componnet/Footer";

export default function Contact() {


  

  return (
    <div className="contactPage container-fluid">
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
        Contacts
      </div>

      <div className="row mt-5" style={{}}>


        <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2"></div>

        <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-8 contactDetailes">
          <div className="container-fluid ">
            <div className="row" style={{alignItems:"start"}}>

            <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-6" style={{maxWidth:"600px"}}>

{/* 
            <div className="form-container">
          <form >
            <h2>Drop Us a Line</h2>
            <label>
              Your Name
              <input
                type="text"
                name="name"
              
               
                required
              />
            </label>
            <label>
              Your Email
              <input
                type="email"
                name="email"
        
                required
              />
            </label>
            <label>
              Website
              <input
                type="text"
                name="website"
           
              />
            </label>
            <label>
              Your Comment
              <textarea
                name="comment"
            
                required
              />
            </label>
            <div class="blogcircle-container" style={{ position: "relative" }}>
  <div className="blogcircle-btn"></div>
  <span className="blogcircle-btnspan" style={{ color: "white", fontSize:"20px" }}>
    LOAD MORE NEWS
  </span>
</div>

          </form>
        </div> */}

              <Contact1/>
            </div>

      
            <div className=" col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5 " >

            <Contact2/>
            </div>
       
            </div>
          </div>
        </div>

        <div className=" col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2"></div>
      </div>

      <div className="row" style={{display:"flex", justifyContent:"center", marginBottom:"100px", marginTop:"50px",  cursor: "pointer"
}}>
    
      </div>

      <div className="row" >
        <div className=" col-lg-12 col-xl-12" style={{padding:"0"}}>
        <Map />

        </div>
      </div>

      <div className="row">
        <div className=" col-lg-12 col-xl-12"  style={{padding:"0"}}>

        <Footer />
        </div>
      </div>
    </div>
  );
}
