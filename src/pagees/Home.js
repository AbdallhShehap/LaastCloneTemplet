import '../asisste/Home.css';
import Menu from '../componnet/Menu' ;
import FirstSection from '../componnet/FirstSection' ;
import SecondSection from '../componnet/SecondSection' ;
import ThirdSection from '../componnet/ThirdSection' ;
import FourSection from '../componnet/FourSection' ;
import FiveSection from '../componnet/FiveSection' ;
import Footer from '../componnet/Footer' ;

function Home() {
  return (
    <div className="Home ">

      
      {/* First Section */}
      <div >
      <FirstSection/>

      </div>

      {/* Secound Section */}
      <div>

      <SecondSection style={{}}/>
      </div>


      <div >
        <ThirdSection/>
      </div>

 
      <div >
        <FourSection/>
      </div>
   
      <div >
        <FiveSection/>
      </div>
        
    
      <div style={{width:'100%'}}>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
