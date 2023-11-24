import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../asisste/MainBackground.css";
import '../asisste/font.css'
import Menu from './Menu'

function ResponsiveAutoExample() {
  return (
    <div>
    <div className="container-fluid" style={{ }}>

      
      <div className="row">
    <Menu/>

      </div>

   

      <div className="row firstText" style={{ marginTop:"4rem" }}>

      <div  className="col-sm-1 col-md-1 col-lg-1 col-xl-1  col-xxl-2 "></div>

        <div className="col-sm-11 col-md-11 col-lg-11 col-xl-10 col-xxl-7 HIGH-TEXT" style={{
              fontSize: "130px",
              color: "white",
              display: "flex",
              justifyContent: "flex-start",
              fontWeight: "600"
            }}>
        HIGH END
          
        </div>
        {/* <div className="col-sm-4 col-md-4 col-lg-4 col-xl-2" ></div> */}

        <div  className="col-sm-1 col-md-1 col-lg-1 col-xl-1  col-xxl-3 "></div>

      </div>

      <div className="row" style={{ }}>
        <div  className="col-sm-1 col-md-1 col-lg-1 col-xl-1  col-xxl-2 ">
          <div class="vertical-words">Facebook</div>
        </div>
        <div className="col-sm-11 col-md-11 col-lg-11 col-xl-10 col-xxl-7 HIGH-TEXT">
         
         
          <div className="container-fluid"
            
            style={{
              color: "white",
              fontWeight: "bold",
              display: "flex",
              alignItems: "start",
              textAlign: "start",
              // fontFamily: 'Stoicheion' 
            }}
          >
            <div className="row" style={{   }}>
              <div className="col mr-3" >
                <img
                  className="imgicon"
                  src="https://wgl-demo.net/bili/wp-content/uploads/2022/03/arrow_orange.png"
                  style={{ }}
                />
              </div>
              <div className='col text'
               
                
                style={{
                color: "white",
                display: "flex",
                justifyContent: "flex-start",
                // fontFamily: 'STCaiyun, sans-serif' 
                
              }}
              >
                <div class="wordart italic-outline"><span class="text2">CREATIVE</span></div>
                
              </div>
            </div>
          </div>
        </div>
            
        <div  className="col-sm-1 col-md-1 col-lg-1 col-xl-1  col-xxl-3 "></div>

      </div>

    
      <div className="row" style={{ }}>


   


        <div  className="col-sm-1 col-md-1 col-lg-1 col-xl-1  col-xxl-2">
          <div class="vertical-words">twitter</div>
        </div>
        <div className="col-sm-11 col-md-11 col-lg-11 col-xl-10 col-xxl-7 HIGH-TEXT"
          style={{
            fontSize: "130px",
            color: "white",
            display: "flex",
            justifyContent: "flex-start",
            fontWeight: "600",
          }}
        >
          AGENCY
     
         </div>
         <div className=" col-sm-1 col-md-1 col-lg-1 col-xl-1  col-xxl-3"></div>
      </div>

      <div className="row" style={{ }}>
      <div  className="col-sm-1 col-md-1 col-lg-1 col-xl-1  col-xxl-2 ">
          <div class="vertical-words">instagram</div>
        </div>

        
        <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 HIGH-TEXT" >
        <div style={{ color: "white", fontWeight: "600", display: "flex", fontFamily:"sans-serif" }}
        >
          <div>
            <p style={{ fontSize: "18px" , textAlign:"start"}}>
              Over 15 years in the game & build{" "}
              successful, profitable products
            </p>
          </div>
 
        </div>

        </div>

            
        <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-2 circle-container"
        style={{
          fontSize: "",
          color: "white",
          fontWeight: "600",
          position: "relative",
        }}
      >
        <div className="circle-btn"></div>
        <span className="circle-btnspan" style={{ color: "white", fontSize:"20px" }} >GET IN TOUCH</span>
      </div>





      <div className="col-xxl-2"></div>
      
      <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-3"></div>
      </div>





    </div>
    
    </div>
  );
}

export default ResponsiveAutoExample;
