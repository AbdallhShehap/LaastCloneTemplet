// import React, { useState } from "react";
// import {
//   MDBContainer,
//   MDBCol,
//   MDBNavbar,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBNavbarBrand, // Import the MDBNavbarBrand component
//   MDBDropdown,
//   MDBDropdownToggle,
//   MDBDropdownMenu,
//   MDBListGroup,
//   MDBListGroupItem,
//   MDBRow,
// } from "mdb-react-ui-kit";

// // import ImageComponent from './ImageComponent';
// import "../asisste/Menu.css";
// import { slide as Menu } from "react-burger-menu";

// export default function App() {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const handleDropdownMouseEnter = () => {
//     setDropdownOpen(true);
//   };

//   const handleDropdownMouseLeave = () => {
//     setDropdownOpen(false);
//   };

//   return (
//     <div>
//       {/* <ImageComponent /> */}
//       {/* <div className="menu-container"> */}
//       <MDBNavbar expand="lg" className="navbar">
//         <MDBContainer >
//           <MDBNavbarBrand>
//             <img
//               src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/logo-1.png"
//               alt="Your Logo"
//               height="53px"
//             />
//           </MDBNavbarBrand>
//           <MDBNavbarNav
//             className="me-auto MenuItem"
//             style={{ justifyContent: "center" }}
//           >
//             <MDBNavbarItem
//               className="position-static"
//               onMouseEnter={handleDropdownMouseEnter}
//               onMouseLeave={handleDropdownMouseLeave}
//             >
//               <MDBDropdown style={{ width: "100%" }}>
//                 <MDBDropdownToggle
//                   tag="a"
//                   className="nav-link custom-dropdown-toggle"
//                   style={{ color: "white", fontWeight: "500", fontSize: "1vw" }}
//                 >
//                   HOME
//                 </MDBDropdownToggle>
//                 <MDBDropdownMenu
//                   className="mt-2"
//                   style={{
//                     borderTopLeftRadius: "0",
//                     borderTopRightRadius: "0",
//                     width: "800px",
//                   }}
//                 >
//                   <MDBContainer style={{ width: "800px" }}>
//                     <MDBRow className="my-5 mx-2">
//                       <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
//                         <p className="text-uppercase font-weight-bold">
//                           Explicabo voluptas
//                         </p>
//                         <a href="" className="text-dark">
//                           <MDBRow className="mb-4 border-bottom pb-2">
//                             <MDBCol col="3">
//                               <img
//                                 src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
//                                 className="img-fluid shadow-1-strong rounded"
//                                 alt="Hollywood Sign on The Hill"
//                               />
//                             </MDBCol>

//                             <p className="mb-2">
//                               <strong>Lorem ipsum dolor sit amet</strong>
//                             </p>
//                             <p>
//                               <u>15.07.2020</u>
//                             </p>
//                           </MDBRow>
//                         </a>
//                       </MDBCol>
//                       <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
//                         <p className="text-uppercase font-weight-bold">
//                           Explicabo voluptas
//                         </p>
//                         <a href="" className="text-dark">
//                           <MDBRow className="mb-4 border-bottom pb-2">
//                             <MDBCol col="3">
//                               <img
//                                 src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
//                                 className="img-fluid shadow-1-strong rounded"
//                                 alt="Hollywood Sign on The Hill"
//                               />
//                             </MDBCol>

//                             <p className="mb-2">
//                               <strong>Lorem ipsum dolor sit amet</strong>
//                             </p>
//                             <p>
//                               <u>15.07.2020</u>
//                             </p>
//                           </MDBRow>
//                         </a>
//                       </MDBCol>

//                       <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
//                         <p className="text-uppercase font-weight-bold">
//                           Explicabo voluptas
//                         </p>
//                         <a href="" className="text-dark">
//                           <MDBRow className="mb-4 border-bottom pb-2">
//                             <MDBCol col="3">
//                               <img
//                                 src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
//                                 className="img-fluid shadow-1-strong rounded"
//                                 alt="Hollywood Sign on The Hill"
//                               />
//                             </MDBCol>

//                             <p className="mb-2">
//                               <strong>Lorem ipsum dolor sit amet</strong>
//                             </p>
//                             <p>
//                               <u>15.07.2020</u>
//                             </p>
//                           </MDBRow>
//                         </a>
//                       </MDBCol>
//                     </MDBRow>

//                   </MDBContainer>
//                 </MDBDropdownMenu>
//               </MDBDropdown>
//             </MDBNavbarItem>

//             <MDBNavbarItem className="position-static">
//               <MDBDropdown>
//                 <MDBDropdownToggle
//                   tag="a"
//                   className="nav-link custom-dropdown-toggle"
//                   style={{ color: "white", fontWeight: "500", fontSize: "1vw" }}
//                 >
//                   PAGES
//                 </MDBDropdownToggle>
//                 <MDBDropdownMenu
//                   className="mt-0 w-100 justify-content-center"
//                   style={{
//                     borderTopLeftRadius: "0",
//                     borderTopRightRadius: "0",
//                   }}
//                 >
//                   <MDBContainer>
//                     <MDBRow className="my-1">
//                       <MDBCol md="12" lg="12" className="mb-1 mb-lg-0">
//                         <MDBListGroup flush>

//                           <MDBListGroupItem tag="a" href="#" action>
//                             Dolor sit
//                           </MDBListGroupItem>
//                           <MDBListGroupItem tag="a" href="#" action>
//                             Lorem ipsum
//                             <CustomNestedDropdownItem />
//                           </MDBListGroupItem>
//                         </MDBListGroup>
//                       </MDBCol>
//                     </MDBRow>
//                   </MDBContainer>
//                 </MDBDropdownMenu>
//               </MDBDropdown>
//             </MDBNavbarItem>

//             <MDBNavbarItem className="position-static">
//               <MDBDropdown>
//                 <MDBDropdownToggle
//                   tag="a"
//                   className="nav-link custom-dropdown-toggle"
//                   style={{ color: "white", fontWeight: "500", fontSize: "1vw" }}
//                 >
//                   BLOG
//                 </MDBDropdownToggle>
//                 <MDBDropdownMenu
//                   className="mt-0 w-100 justify-content-center"
//                   style={{
//                     borderTopLeftRadius: "0",
//                     borderTopRightRadius: "0",
//                   }}
//                 >
//                   <MDBContainer>
//                     <MDBRow className="my-1">
//                       <MDBCol md="12" lg="12" className="mb-1 mb-lg-0">
//                         <MDBListGroup flush>

//                           <MDBListGroupItem tag="a" href="#" action>
//                             Dolor sit
//                           </MDBListGroupItem>
//                           <MDBListGroupItem tag="a" href="#" action>
//                             Lorem ipsum
//                             <CustomNestedDropdownItem />
//                           </MDBListGroupItem>
//                         </MDBListGroup>
//                       </MDBCol>
//                     </MDBRow>
//                   </MDBContainer>
//                 </MDBDropdownMenu>
//               </MDBDropdown>
//             </MDBNavbarItem>

//             <MDBNavbarItem className="position-static">
//               <MDBDropdown>
//                 <MDBDropdownToggle
//                   tag="a"
//                   className="nav-link custom-dropdown-toggle"
//                   style={{ color: "white", fontWeight: "500", fontSize: "1vw" }}
//                 >
//                   PORTFOLIO
//                 </MDBDropdownToggle>
//                 <MDBDropdownMenu
//                   className="mt-0 w-100 justify-content-center"
//                   style={{
//                     borderTopLeftRadius: "0",
//                     borderTopRightRadius: "0",
//                   }}
//                 >
//                   <MDBContainer>
//                     <MDBRow className="my-1">
//                       <MDBCol md="12" lg="12" className="mb-1 mb-lg-0">
//                         <MDBListGroup flush>
//                           <MDBListGroupItem tag="a" href="#" action>
//                             Lorem ipsum
//                           </MDBListGroupItem>

//                           <MDBListGroupItem tag="a" href="#" action>
//                             Lorem ipsum
//                             <CustomNestedDropdownItem />
//                           </MDBListGroupItem>
//                         </MDBListGroup>
//                       </MDBCol>
//                     </MDBRow>
//                   </MDBContainer>
//                 </MDBDropdownMenu>
//               </MDBDropdown>
//             </MDBNavbarItem>

//             <MDBNavbarItem className="position-static">
//               <MDBDropdown>
//                 <MDBDropdownToggle
//                   tag="a"
//                   className="nav-link custom-dropdown-toggle"
//                   style={{ color: "white", fontWeight: "500", fontSize: "1vw" }}
//                 >
//                   SHOP
//                 </MDBDropdownToggle>
//                 <MDBDropdownMenu
//                   className="mt-0 w-100 justify-content-center"
//                   style={{
//                     borderTopLeftRadius: "0",
//                     borderTopRightRadius: "0",
//                   }}
//                 >
//                   <MDBContainer>
//                     <MDBRow className="my-1">
//                       <MDBCol md="12" lg="12" className="mb-1 mb-lg-0">
//                         <MDBListGroup flush>
//                           <MDBListGroupItem tag="a" href="#" action>
//                             Lorem ipsum
//                           </MDBListGroupItem>
//                           <MDBListGroupItem tag="a" href="#" action>
//                             Dolor sit
//                           </MDBListGroupItem>

//                           <MDBListGroupItem tag="a" href="#" action>
//                             Lorem ipsum
//                             <CustomNestedDropdownItem />
//                           </MDBListGroupItem>
//                         </MDBListGroup>
//                       </MDBCol>
//                     </MDBRow>
//                   </MDBContainer>
//                 </MDBDropdownMenu>
//               </MDBDropdown>
//             </MDBNavbarItem>

//             <MDBNavbarItem className=" position-static">
//               <MDBNavbarLink
//                 active
//                 aria-current="page"
//                 href="#"
//                 style={{ color: "white", fontWeight: "500", fontSize: "1vw" }}
//               >
//                 CONTACTS
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//           </MDBNavbarNav>
//         </MDBContainer>
//         {/* <Props pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
//       <div id="page-wrap">
//         <h1>Cool Restaurant</h1>
//         <h2>Check out our offerings in the sidebar!</h2>
//       </div> */}
//       </MDBNavbar>
//       {/* </div> */}
//     </div>
//   );
// }

// const CustomNestedDropdownItem = () => {
//   return (
//     <MDBDropdown>
//       <MDBDropdownToggle
//         tag="a"
//         className="nav-link"
//         style={{ color: "white" }}
//       >
//         Nested Dropdown
//       </MDBDropdownToggle>
//       <MDBDropdownMenu>
//         <MDBListGroupItem tag="a" href="#" action>
//           Nested Item 1
//         </MDBListGroupItem>
//         <MDBListGroupItem tag="a" href="#" action>
//           Nested Item 2
//         </MDBListGroupItem>
//       </MDBDropdownMenu>
//     </MDBDropdown>
//   );
// };

// const Props = () => {
//   return (
//     <Menu>
//       <a className="menu-item" href="/">
//         Home
//       </a>
//       <a className="menu-item" href="/salads">
//         Salads
//       </a>
//       <a className="menu-item" href="/pizzas">
//         Pizzas
//       </a>
//       <a className="menu-item" href="/desserts">
//         Desserts
//       </a>
//     </Menu>
//   );
// };

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import imageunderSideMenu from '../images/2qwe.png';
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import images from "../images/3qwe.png";
import "../asisste/Navbar.css";
import "../asisste/sideMenu.css";

function Navbar() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const menuItems = [
    { path: "/page1", label: "Page 1" },
    { path: "/page2", label: "Page 2" },
    { path: "/ourmission", label: "Our Mission" },
    // Add more items here as needed
  ];



  const [showAlternateMenu, setShowAlternateMenu] = useState(false);


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  
  const closeDropdown = () => {
    
    setIsDropdownOpen(false);
  };

  
  const toggleSideMenu = () => {
    console.log("toggleSideMenu called"); // This should appear in the console
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
  
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      const scrollThreshold = 500;

      if (currentScrollY > scrollThreshold) {
        setIsSideMenuOpen(false);
      }
    

      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setShowAlternateMenu(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowAlternateMenu(false);
      }
  

       // Check if the scroll position is at the top of the page
    if (currentScrollY === 0) {
      setShowAlternateMenu(false);
    }



      lastScrollY = currentScrollY; // Update the last scroll position
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <>
      {showAlternateMenu && (
    <motion.nav className={`container-fluid navbar-alternate ${showAlternateMenu ? 'show' : ''}`}
    initial={{ opacity: 0 }} // Initial opacity is set to 0
          animate={{ opacity: 1 }} // Gradually transition to opacity 1
          transition={{ duration: 0.5 }} // Set the duration of the transition
    >
      {/* Alternate menu content here */}
      <nav className="navbar container-fluid">
      <div className="nav-brand">
        <img
          src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/logo-1.png"
          alt="Your Logo"
        />
      </div>
      <div className="nav-items">
  <Link to="/">HOME</Link>
  <span className="nav-item" onMouseLeave={closeDropdown}>
          <Link
            to="/ourmission"
            onMouseOver={toggleDropdown}
            
          >
            PAGES
          </Link>
          {isDropdownOpen && (
             <div className="dropdown-content">
             {menuItems.map((item, index) => (
               <Link key={index} to={item.path}>{item.label}</Link>
             ))}
           </div>
          )}
        </span>


        
  <Link to="/blog">BLOG</Link>
  <Link to="/portfolio">PORTFOLIO</Link>
  <Link to="/shop">SHOP</Link>
  <Link to="/contacts">CONTACTS</Link>

 
</div>

      <div className="nav-cart">
        {/* The menu icon from react-icons to toggle the side menu */}
        <HiMenuAlt4 onClick={toggleSideMenu} style={{ fontSize: '30px' }} />
      </div>

      {/* Sidebar menu */}
      {isSideMenuOpen && (
        <motion.div
          className={`side-menu ${isSideMenuOpen ? "show" : ""}`}
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <HiX onClick={toggleSideMenu} />
          <div className="container-fluid">
            <div className="row" style={{ marginTop: "40px" }}>
              <div className="col-1"></div>

              <div className="col-10"
                style={{ display: "flex", justifyContent: "start" }}
              >
                <img
                  src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/logo-1.png"
                  alt="Your Logo"
                  height="50px"
                  width="50px"
                  style={{ padding: "0", margin: "0" }}
                />
              </div>

              <div className="col-1"></div>
            </div>

            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-1"></div>
              <div className="col-10">
                <p style={{ textAlign: "start", fontSize: "25px" }}>
                  Unique Digital Ideas for Successful Business
                </p>
              </div>
              <div className="col-1"></div>
            </div>

            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col-1"></div>
              <div className="col-10">
                <p
                  style={{
                    textAlign: "start",
                    fontSize: "16px",
                    color: "#aaa9a9",
                    fontWeight: "700",
                  }}
                >
                  CONTACT US
                </p>

                <ul>
                  <li className="contact-item">
                    27 Division St, New York, NY 10002
                  </li>
                  <li className="contact-item">+1 800 123 456 78</li>
                  <li className="contact-item">bili@mail.com</li>
                </ul>
              </div>
              <div className="col-1"></div>
            </div>

            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col-1"></div>
              <div className="col-10">
                <p
                  style={{
                    textAlign: "start",
                    fontSize: "16px",
                    color: "#aaa9a9",
                    fontWeight: "700",
                  }}
                >
                  SUBSCRIBE
                </p>

                <div class="col-auto">
                  <div class="input-group mb-2">
                    <div class="input-group-prepend"></div>
                    <input
                      type="text"
                      className="form-control"
                      id="inlineFormInputGroup"
                      placeholder="Get news & updates"
                      style={{
                        backgroundColor: "black",
                        border: "none",
                        color: "white",
                      }}
                    />
                    <button
                      style={{
                        backgroundColor: "black",
                        border: "none",
                        color: "white",
                        fontSize: "23px",
                      }}
                      class="input-group-text"
                    >
                      @
                    </button>
                  </div>
                </div>

                <p
                  style={{
                    textAlign: "start",
                    fontSize: "13px",
                    color: "#aaa9a9",
                  }}
                >
                  Our expertise, as well as our passion for web design, sets us
                  apart from other agencies.
                </p>
              </div>
              <div className="col-1"></div>
            </div>

            <div className="row social-links" style={{ marginTop: "10px" }}>
              <div className="col-1"></div>
              <div className="col-5 d-flex justify-content-between align-items-center">
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


            <div className="row imageInLastSideMenu" style={{ marginTop: "30px", width:"100%" }}>
              

              <img src={imageunderSideMenu} className="imageunderSideMenu" />
            
            </div>
          </div>
        </motion.div>
      )}


    </nav>
    </motion.nav>
  )}


    <nav className="navbar container-fluid">
      <div className="nav-brand">
        <img
          src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/logo-1.png"
          alt="Your Logo"
        />
      </div>
      <div className="nav-items">
  <Link to="/">HOME</Link>
  <span className="nav-item" onMouseLeave={closeDropdown}>
          <Link
            to="/ourmission"
            onMouseOver={toggleDropdown}
            
          >
            PAGES
          </Link>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/page1">Page 1</Link>
              <Link to="/page2">Page 2</Link>
              {/* Add more pages as needed */}
              <Link to="/ourmission">Our Mission</Link>
            </div>
          )}
        </span>


        
  <Link to="/blog">BLOG</Link>
  <Link to="/portfolio">PORTFOLIO</Link>
  <Link to="/shop">SHOP</Link>
  <Link to="/contacts">CONTACTS</Link>

 
</div>

      <div className="nav-cart">
        {/* The menu icon from react-icons to toggle the side menu */}
        <HiMenuAlt4 onClick={toggleSideMenu} style={{ fontSize: '30px' }} />
      </div>

      {/* Sidebar menu */}
      {isSideMenuOpen && (
        <motion.div
          className={`side-menu ${isSideMenuOpen ? "show" : ""}`}
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <HiX onClick={toggleSideMenu} />
          <div className="container-fluid">
            <div className="row" style={{ marginTop: "40px" }}>
              <div className="col-1"></div>

              <div className="col-10"
                style={{ display: "flex", justifyContent: "start" }}
              >
                <img
                  src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/logo-1.png"
                  alt="Your Logo"
                  height="50px"
                  width="50px"
                  style={{ padding: "0", margin: "0" }}
                />
              </div>

              <div className="col-1"></div>
            </div>

            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-1"></div>
              <div className="col-10">
                <p style={{ textAlign: "start", fontSize: "25px" }}>
                  Unique Digital Ideas for Successful Business
                </p>
              </div>
              <div className="col-1"></div>
            </div>

            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col-1"></div>
              <div className="col-10">
                <p
                  style={{
                    textAlign: "start",
                    fontSize: "16px",
                    color: "#aaa9a9",
                    fontWeight: "700",
                  }}
                >
                  CONTACT US
                </p>

                <ul>
                  <li className="contact-item">
                    27 Division St, New York, NY 10002
                  </li>
                  <li className="contact-item">+1 800 123 456 78</li>
                  <li className="contact-item">bili@mail.com</li>
                </ul>
              </div>
              <div className="col-1"></div>
            </div>

            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col-1"></div>
              <div className="col-10">
                <p
                  style={{
                    textAlign: "start",
                    fontSize: "16px",
                    color: "#aaa9a9",
                    fontWeight: "700",
                  }}
                >
                  SUBSCRIBE
                </p>

                <div class="col-auto">
                  <div class="input-group mb-2">
                    <div class="input-group-prepend"></div>
                    <input
                      type="text"
                      className="form-control"
                      id="inlineFormInputGroup"
                      placeholder="Get news & updates"
                      style={{
                        backgroundColor: "black",
                        border: "none",
                        color: "white",
                      }}
                    />
                    <button
                      style={{
                        backgroundColor: "black",
                        border: "none",
                        color: "white",
                        fontSize: "23px",
                      }}
                      class="input-group-text"
                    >
                      @
                    </button>
                  </div>
                </div>

                <p
                  style={{
                    textAlign: "start",
                    fontSize: "13px",
                    color: "#aaa9a9",
                  }}
                >
                  Our expertise, as well as our passion for web design, sets us
                  apart from other agencies.
                </p>
              </div>
              <div className="col-1"></div>
            </div>

            <div className="row social-links" style={{ marginTop: "10px" }}>
              <div className="col-1"></div>
              <div className="col-5 d-flex justify-content-between align-items-center">
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


            <div className="row imageInLastSideMenu" style={{ marginTop: "30px", width:"100%" }}>
              

              <img src={imageunderSideMenu} className="imageunderSideMenu" />
            
            </div>
          </div>
        </motion.div>
      )}


    </nav>
    </>
  );
}

export default Navbar;
