import headerImage from '../../assets/images/LandingHero1.png';
import '@fontsource/montserrat';
import '@fontsource/fahkwang';
import Logo from '../../assets/images/logotype_fullcolor_rgb 1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './successfulRegistry.css'

const SuccessfulRegistry = () => {
  
    return (
      <div className="container-fluid"> 
      <img className="hero" src={headerImage} alt="Hero" />
      <img className="logo" src={Logo} alt="Logo" />
      <div />
      <div className="modal-container">
       
      <h1>Thank you <br/> for your registration</h1>

        <p>An email has been sent to your email box, 
        please check your spam folder</p>

        <h4>LEARN MORE ABOUT OVIVA CARE </h4>

      </div>
      </div>
    )
  }
  
  export default SuccessfulRegistry 
  