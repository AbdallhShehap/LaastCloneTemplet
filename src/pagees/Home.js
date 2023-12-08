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
      <div style={{cursor:'default'}}>
      <FirstSection/>

      </div>

      {/* Secound Section */}
      <div>

      <SecondSection style={{cursor:'default'}}/>
      </div>


      <div style={{cursor:'default'}} >
        <ThirdSection/>
      </div>

 
      <div >
        <FourSection/>
      </div>
   
      <div >
        <FiveSection/>
      </div>
        
    
      <div style={{width:'100%',cursor:'default'}}>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
