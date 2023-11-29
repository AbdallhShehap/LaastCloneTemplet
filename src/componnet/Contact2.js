import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

import '../asisste/cont1.css';

const MyForm = () => {
    const [user, setUser] = useState({
        name: '',
        id: '',
        email: '',
        phone: '',
        term: false
    });

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const toggleTerms = () => {
        setUser({ ...user, term: !user.term });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submit action
        console.log(user); // For demonstration, logs the user object. Replace with your submit logic.
    };

    return (
        <div className="contact2" >

            
          
          

                <p style={{ color: "#888888", fontSize:"13px", fontWeight:"600",fontFamily:"sans-serif"}}>OUR CONTACTS</p>
            <h2 className='titleFirstSContact' style={{color:"white" ,fontFamily:"sans-serif"}}>Let’s Start Working Together. Get in Touch with Us!</h2>
                <p style={{ color: "#888888", fontSize:"13px", fontWeight:"600",fontFamily:"sans-serif", width:"400px", maxWidth:'400px', marginTop:"30px"}}>Get in touch to discuss your employee wellbeing needs today. Please give us a call, drop us an email.</p>
            
                <div style={{ color: "white", marginTop:"30px"}}>
                  <h5 className="">
                    27 Division St, New York, NY 10002
                  </h5>
                  <h5 className="contact-item">+1 800 123 456 78</h5>
                  <h5 className="contact-item">bili@mail.com</h5>
                </div>

           

                <p>
       
                <div className="row social-links" style={{ marginTop: "30px" }}>
             
              <div className="col-3 d-flex justify-content-between align-items-center" style={{width:"150px"}}>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={20} color="white" className="social-icon" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={20} color="white" className="social-icon" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    size={20}
                    color="white"
                    className="social-icon"
                  />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={20} color="white" className="social-icon" />
                </a>
              </div>
              <div className="col-5"></div>
              <div className="col-1"></div>
            </div>
                </p>
               
            
        </div>
    );
};

export default MyForm;
