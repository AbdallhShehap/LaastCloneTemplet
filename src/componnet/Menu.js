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
import axios from "axios";

import { Link } from "react-router-dom";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import imageunderSideMenu from "../images/2qwe.png";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import images from "../images/3qwe.png";
import "../asisste/Navbar.css";
import "../asisste/sideMenu.css";

function Navbar() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [showAlternateMenu, setShowAlternateMenu] = useState(false);

  const [logo, setLogo] = useState({});

  const [socialLinks, setSocialLinks] = useState([]); // State for feedback message
  const [email, setEmail] = useState(""); // State for email input

  const [feedbackMessage, setFeedbackMessage] = useState(""); // State for feedback message

  const [fixedSideMenuData, setFixedSideMenuData] = useState({
    titlesidemenu: "WHAT WE OFFER",
    subtitle1sidemenu: "Giving Your Business Some Great Ideas",
    subtitle2sidemenu: "",
    textsidemenu: "MORE SERVICES",
  });

  const [contactInfo, setContactInfo] = useState([]);

  const [pages, setPages] = useState([]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribeClick = async () => {
    if (!email.trim()) {
      setFeedbackMessage("Please enter an email address.");
      return;
    }
    if (!isValidEmail(email)) {
      setFeedbackMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:1010/footer/addfootersubscribeemail",
        { email }
      );
      if (response.status === 200) {
        setFeedbackMessage("Subscribed successfully!");
        setEmail(""); // Clear the email input field
      } else {
        setFeedbackMessage("Failed to subscribe.");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setFeedbackMessage("Error subscribing.");
    }
  };

  const fetchSocialLinksData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1010/menuicons/socialiconmenu"
      );
      // Assuming the response data is an array of objects with 'title' and 'image' properties
      console.log({ logo: response.data[0] });
      setSocialLinks(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data from the API using Axios
  const fetchSideMenuFixedData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1010/sidemenu/sidemenu"
      );
      // Assuming the response data is an array of objects with 'title' and 'image' properties
      console.log({ logo: response.data[0] });
      setFixedSideMenuData(response.data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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

  // Fetch data from the API using Axios
  const fetchSideMenuContentData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1010/sidemenu/sidemenucontent"
      );
      // Assuming the response data is an array of objects with 'title' and 'image' properties
      console.log({ logo: response.data[0] });
      setContactInfo(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchpages = async () => {
    try {
      const response = await axios.get("http://localhost:1010/pages/pages");
      console.log({ pages: response.data });
      setPages(response.data);
    } catch (error) {
      console.error("Error fetching main content:", error);
    }
  };

  useEffect(() => {
    // Fetch data from the API using Axios
    const fetchLogoData = async () => {
      try {
        const response = await axios.get("http://localhost:1010/logo/logoimg");
        // Assuming the response data is an array of objects with 'title' and 'image' properties
        console.log({ logo: response.data[0] });
        setLogo(response.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchLogoData();
    fetchSocialLinksData();
    fetchSideMenuFixedData();
    fetchSideMenuContentData();
    fetchpages();

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
        <motion.nav
          className={`container-fluid navbar-alternate ${
            showAlternateMenu ? "show" : ""
          }`}
          initial={{ opacity: 0 }} // Initial opacity is set to 0
          animate={{ opacity: 1 }} // Gradually transition to opacity 1
          transition={{ duration: 0.5 }} // Set the duration of the transition
        >
          {/* Alternate menu content here */}
          <nav className="navbar container-fluid">
            <div className="nav-brand">
              <Link to="/">
                <img
                  src={`http://localhost:1010/${logo.logoImg}`}
                  alt="Your Logo"
                />
              </Link>
            </div>
            <div className="nav-items">
              <Link to="/">HOME</Link>
              {/* <span className="nav-item" onMouseLeave={closeDropdown}>
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
              <Link to="/ourmission">Our Mission</Link>
            </div>
          )}
        </span> */}

              <span className="dropdown">
                <Link
                  to=""
                  onMouseOver={toggleDropdown}
                  className=" dropdown-toggle"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  PAGES
                </Link>

                <div
                  className="dropdown-menu newDropdown"
                  style={{
                    backgroundColor: "#181818",
                    border: "1px",
                    boxShadow: "1px",
                    marginLeft: "130px",
                  }}
                  aria-labelledby="dropdownMenuButton"
                >
                  {pages.map((item, index) => {
                    const fullPath = `/${item.path.trim()}`;
                    console.log(fullPath); // Check the output in the console
                    return (
                      <Link
                        className="dropdown-item newDropdownItem"
                        key={index}
                        to={fullPath}
                        style={{ marginLeft: "0px" }}
                      >
                        {item.namePage}
                      </Link>
                    );
                  })}
                </div>
              </span>

              {pages.slice(0, 5).map((item, index) => (
        <Link key={index} to={`/${item.path.trim()}`}>
          {item.namePage}
        </Link>
      ))}
            </div>

            <div className="nav-cart">
              {/* The menu icon from react-icons to toggle the side menu */}
              <HiMenuAlt4
                onClick={toggleSideMenu}
                style={{ fontSize: "30px" }}
              />
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

                    <div
                      className="col-10"
                      style={{ display: "flex", justifyContent: "start" }}
                    >
                      <Link to="/">
                        <img
                          src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/logo-1.png"
                          alt="Your Logo"
                          height="50px"
                          width="50px"
                          style={{ padding: "0", margin: "0" }}
                        />
                      </Link>
                    </div>

                    <div className="col-1"></div>
                  </div>

                  <div className="row" style={{ marginTop: "30px" }}>
                    <div className="col-1"></div>
                    <div className="col-10">
                      <p style={{ textAlign: "start", fontSize: "25px" }}>
                        {fixedSideMenuData.titlesidemenu}
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
                        {fixedSideMenuData.subtitle1sidemenu}
                      </p>

                      <ul>
                        {contactInfo.map((item, index) => (
                          <li key={index} className="contact-item">
                            {item.content}
                          </li>
                        ))}
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
                        {fixedSideMenuData.subtitle2sidemenu}
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
                            value={email}
                            onChange={handleEmailChange}
                          />
                          <button
                            style={{
                              backgroundColor: "black",
                              border: "none",
                              color: "white",
                              fontSize: "23px",
                            }}
                            class="input-group-text"
                            onClick={handleSubscribeClick}
                          >
                            @
                          </button>
                        </div>
                        {feedbackMessage && (
                          <p style={{ color: "white" }}>{feedbackMessage}</p>
                        )}
                      </div>

                      <p
                        style={{
                          textAlign: "start",
                          fontSize: "13px",
                          color: "#aaa9a9",
                        }}
                      >
                        {fixedSideMenuData.textsidemenu}
                      </p>
                    </div>
                    <div className="col-1"></div>
                  </div>

                  <div
                    className="row social-links"
                    style={{ marginTop: "10px" }}
                  >
                    <div className="col-1"></div>
                    <div className="col-5 d-flex justify-content-between align-items-center">
                      {socialLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.link}
                          className="social-icon"
                          style={{
                            color: "white",
                            marginLeft: index > 0 ? "1rem" : "0",
                          }}
                        >
                          <img
                            src={`http://localhost:1010/${link.icon}`}
                            style={{ height: "25px" }}
                          />
                        </a>
                      ))}
                    </div>
                    <div className="col-5"></div>
                    <div className="col-1"></div>
                  </div>

                  <div
                    className="row imageInLastSideMenu"
                    style={{ marginTop: "30px", width: "100%" }}
                  >
                    <img
                      src={imageunderSideMenu}
                      className="imageunderSideMenu"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </nav>
        </motion.nav>
      )}

      <nav className="navbar container-fluid">
        <div className="nav-brand">
          <Link to="/">
            <img
              src={`http://localhost:1010/${logo.logoImg}`}
              alt="Your Logo"
            />
          </Link>
        </div>
        <div className="nav-items">
          <Link to="/">HOME</Link>
          {/* <span className="nav-item" onMouseLeave={closeDropdown}>
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
              <Link to="/ourmission">Our Mission</Link>
            </div>
          )}
        </span> */}

          <span className="dropdown">
            <Link
              onMouseOver={toggleDropdown}
              className=" dropdown-toggle"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              PAGES
            </Link>

            <div
              className="dropdown-menu newDropdown"
              style={{
                backgroundColor: "#181818",
                border: "1px",
                boxShadow: "1px",
                marginLeft: "130px",
              }}
              aria-labelledby="dropdownMenuButton"
            >
             {pages.map((item, index) => {
                    const fullPath = `/${item.path.trim()}`;
                    console.log(fullPath); // Check the output in the console
                    return (
                      <Link
                        className="dropdown-item newDropdownItem"
                        key={index}
                        to={fullPath}
                        style={{ marginLeft: "0px" }}
                      >
                        {item.namePage}
                      </Link>
                    );
                  })}
            </div>
          </span>

          {pages.slice(0, 5).map((item, index) => (
        <Link key={index} to={`/${item.path.trim()}`}>
          {item.namePage}
        </Link>
      ))}
        </div>

        <div className="nav-cart">
          {/* The menu icon from react-icons to toggle the side menu */}
          <HiMenuAlt4 onClick={toggleSideMenu} style={{ fontSize: "30px" }} />
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

                <div
                  className="col-10"
                  style={{ display: "flex", justifyContent: "start" }}
                >
                  <img
                    src={`http://localhost:1010/${logo.logoImg}`}
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
                    {fixedSideMenuData.titlesidemenu}
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
                    {fixedSideMenuData.subtitle1sidemenu}
                  </p>

                  <ul>
                    {contactInfo.map((item, index) => (
                      <li key={index} className="contact-item">
                        {item.content}
                      </li>
                    ))}
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
                    {fixedSideMenuData.subtitle2sidemenu}
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
                        value={email}
                        onChange={handleEmailChange}
                      />
                      <button
                        style={{
                          backgroundColor: "black",
                          border: "none",
                          color: "white",
                          fontSize: "23px",
                        }}
                        class="input-group-text"
                        onClick={handleSubscribeClick}
                      >
                        @
                      </button>
                    </div>
                    {feedbackMessage && (
                      <p style={{ color: "white" }}>{feedbackMessage}</p>
                    )}
                  </div>

                  <p
                    style={{
                      textAlign: "start",
                      fontSize: "13px",
                      color: "#aaa9a9",
                    }}
                  >
                    {fixedSideMenuData.textsidemenu}
                  </p>
                </div>
                <div className="col-1"></div>
              </div>

              <div className="row social-links" style={{ marginTop: "10px" }}>
                <div className="col-1"></div>
                <div className="col-5 d-flex justify-content-between align-items-center">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.link}
                      className="social-icon"
                      style={{
                        color: "white",
                        marginLeft: index > 0 ? "1rem" : "0",
                      }}
                    >
                      <img
                        src={`http://localhost:1010/${link.icon}`}
                        style={{ height: "25px" }}
                      />
                    </a>
                  ))}
                </div>
                <div className="col-5"></div>
                <div className="col-1"></div>
              </div>

              <div
                className="row imageInLastSideMenu"
                style={{ marginTop: "30px", width: "100%" }}
              >
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
