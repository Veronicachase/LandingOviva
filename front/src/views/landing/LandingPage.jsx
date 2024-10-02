import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import headerImage from '../../assets/images/LandingHero1.png';
import Logo from '../../assets/images/logotype_fullcolor_rgb 1.png';
import orangeTop from '../../assets/images/Color=Orange-80-Position=top-Device=Desktop.png';
import iconPoint from '../../assets/images/Color=Orange-Number=No-Size=96-Device=Desktop.png';
import iconPoint1 from '../../assets/images/Color=Default-Number=Yes-Size=80-Device=Mobile.png';
import scarfWomanImg from '../../assets/images/scarfWoman.png';
import timeLine1 from '../../assets/images/Type=Line-group-Group=1-Device=Desktop.png';
import timeLine2 from '../../assets/images/Type=Line-group-Group=4-Device=Desktop.png';
import timeline3 from '../../assets/images/Type=Line-group-Group=3-Device=Desktop.png';
import orangeBottom from '../../assets/images/Color=Orange-80-Position=Bottom-Device=Desktop.png';
import LandingSlice12 from '../../assets/images/LandingSlice1.2.png';
import LandingSlice2 from '../../assets/images/landingSlice2.jpg';
import LandingSlice3 from '../../assets/images/landingSlice3.png';
import ImageFooterSin from '../../assets/images/ImageFooterSin.png';
import Agniezka from '../../assets/images/Col-left-Agniezka.png';
import Opinion1 from '../../assets/images/opinion1.jpeg';
import Opinion2 from '../../assets/images/opinion2.jpeg';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import '@fontsource/montserrat';
import '@fontsource/fahkwang';
import './landingPage.css';

function LandingPage() {
  const [timeLeft, setTimeleft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const dueDate = new Date('2024-10-25T13:00:00');
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeDifference = dueDate - now;
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
      setTimeleft({ days, hours, minutes });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container-fluid main ">
      <div className="wrapper">
        <img className="hero" src={headerImage} alt="Hero" />
        <img className="logo" src={Logo} alt="Logo" />
        <div />
        <div className="modal-container">
          <h4>
            YOU FEEL TIRED, HUNGRY, FUGGY, ANXIOUS, AND YOU CRAVE FOR SUGAR ALL
            THE TIME?
          </h4>
          <p className="thinHeaderText"> JOIN LIVE </p>
          <p className="thinHeaderText"> WOMEN´S HORMONAL HEALTH WEBINAR</p>
          <h1>Boost Your Mood & Get Back Your Energy</h1>
          <p className="thinHeaderText"> 10TH SEPTEMBER 2024 12PM -1 CET</p>
          <Link to="/landing-form">
            <button className="mainButton">SAVE YOUR SPOT</button>
          </Link>
        </div>
      </div>
      {/********************************************second block ****************************************** */}
      <div className="wrapper secondary  mb-5">
        <img className="orangeTop" src={orangeTop} alt="Orange Top" />
        <div className="webinarInfo ">
          <h1 className="secondaryh1">Webinar starts in</h1>
          <div className="d-flex mb-5 mt-5">
            <div className="d-flex flex-column">
              <div className="round">
                <h1>{timeLeft.days} </h1>
              </div>
              <div>
                <h4> DAYS </h4>
              </div>
            </div>

            <div className="d-flex flex-column">
              <div className="round">
                <h1>{timeLeft.hours} </h1>
              </div>
              <div>
                <h4> HOURS </h4>
              </div>
            </div>

            <div className="d-flex flex-column">
              <div className="round">
                <h1>{timeLeft.minutes} </h1>
              </div>
              <div>
                <h4> MINUTES </h4>
              </div>
            </div>
          </div>

          <Link to="/landing-form">
            <button className="mainButton">SAVE YOUR SPOT</button>
          </Link>
        </div>
      </div>
{/************************************************* feeling******************************************** */}
      <div className="d-flex justify-content-around  wrapper mb-5 divColumn">
        <div className="flex-fill d-flex  flex-column">
          <h1 className="secondaryh1  ch">Are you feeling:</h1>
          <div className="bullet-container">
            <div className="bullet-point">
              <img src={iconPoint} alt="Exhausted" />
              <p className="bulletPoints">
                <span>EXHAUSTED</span> No matter how much you sleep?
              </p>
            </div>
            <div className="bullet-point">
              <img src={iconPoint} alt="Foggy-headed" />
              <p className="bulletPoints">
                <span>FOGGY-HEADED</span> and unable to focus?
              </p>
            </div>
            <div className="bullet-point">
              <img src={iconPoint} alt="Hungry" />
              <p className="bulletPoints">
                <span>HUNGRY</span> Shortly after eating?
              </p>
            </div>
            <div className="bullet-point">
              <img src={iconPoint} alt="Anxious" />
              <p className="bulletPoints">
                <span>ANXIOUS</span> And on edge?
              </p>
            </div>
            <div className="bullet-point">
              <img src={iconPoint} alt="Craving Sugar" />
              <p className="bulletPoints">
                <span>CRAVING SUGAR</span> All the time?
              </p>
            </div>
          </div>
        </div>
        <div className=" overflow-hidden mr-0 image">
          <img src={scarfWomanImg} alt="Scarf Woman" />
        </div>
      </div>
{/*************************************************dive into******************************************** */}
     
<div className="diveInto mb-5 mt-5 wrapper">
 
    <div className="col-12">
      <img className="timeline mb-5" src={timeLine1} alt="Timeline" />
    </div>

   
    <div className="d-flex">
      <h2 className="ms-3">What we´ll dive into: </h2>
    </div>
      <div className="row m-3">
        <div className="col-12 col-md-6 ">
          <img src={iconPoint1} alt="Icon 1" />
          <span>UNDERSTANDING THE SYMPTOMS:</span>
          <p className="diveIntoPoint">
            Explore the causes of fatigue, brain-fog, anxiety, sleep issues, and sugar cravings.
          </p>
        </div>
        
        <div className="col-12 col-md-6">
          <img src={iconPoint1} alt="Icon 2" />
          <span>PRACTICAL TIPS:</span>
          <p className="diveIntoPoint">
            Gain simple, everyday strategies to combat brain fog, improve focus, and manage and reduce symptoms.
          </p>
        </div>
        
        <div className="col-12 col-md-6">
          <img src={iconPoint1} alt="Icon 3" />
          <span>ROOT CAUSES AND SOLUTIONS:</span>
          <p className="diveIntoPoint">
            Identify what´s contributing to your anxiety and sleep problems and get actionable solutions to start feeling better.
          </p>
        </div>

        <div className="col-12 col-md-6 ">
          <img src={iconPoint1} alt="Icon 4" />
          <span>HORMONAL SHIFTS:</span>
          <p className="diveIntoPoint">
            Learn how hormonal changes affect these symptoms and uncover what´s really going on in your body.
          </p>
        </div>

        <div className="col-12 col-md-6">
          <img src={iconPoint1} alt="Icon 5" />
          <span>BALANCING HORMONES:</span>
          <p className="diveIntoPoint">
            Discover ways to balance your hormones and curb your sugar craving.
          </p>
        </div>

        <div className="col-12 col-md-6">
          <img src={iconPoint1} alt="Icon 6" />
          <span>COMMUNITY SUPPORT:</span>
          <p className="diveIntoPoint">
            Connect with other women facing similar challenges and share experiences.
          </p>
        </div>
      </div>
 

  
    <div className="d-flex justify-content-center mb-5">
      <Link to="/landing-form">
        <button className="mainButton">SAVE YOUR SPOT</button>
      </Link>
  </div>




        {/**+******************************************Agniezka******************************************+ */}
        <div className="mb-5 wrapper">
        <img className="timeline  mb-5" src={timeline3} />

        <div className="row  separacion">
          <div className="col-md-5">
            <img src={Agniezka} />
          </div>

          <div className="col-md-5 ">
            <p className="secondaryTitle">Meet our speaker</p>
            <p className="secondaryText">AGNIESZKA FRONIA</p>
            <p className="longText">
              Hi, I am Agnieszka and I am a certified women’s health expert with
              a passion for helping others.
            </p>

            <p className="longText">
              For many years, I struggled with hormonal health issues such as
              acne, hair loss, weight gain, absence of periods, insomnia, and
              high levels of stress and anxiety. Feeling confused, tired, and
              often ignored by many doctors, I decided to take control of my
              health.
            </p>

            <p className="longText">
              Since 2015, I´ve traveled across South America and India,
              exploring various methods to resolve my symptoms. Along the way, I
              became a certified yoga, meditation, and breath-work teacher.
            </p>
            <p className="longText">
              Additionally, I earned an MSc in Psychological Medicine and Mental
              Health from London Metropolitan University, focusing on hormones,
              inflammation, and gut health.
            </p>
            <p className="longText">
              My goal is to help you navigate your hormonal, physical,
              psychological, and emotional health with ease.
            </p>

            <p className="longText">
              Join my upcoming webinar so we can get to know each other better
              and gain the knowledge you need to take control of your health.
            </p>
          </div>
        </div>
        </div>
{/**+******************************************carrousel******************************************+ */}
        <div className="wrapper Secondary">
          <div  className=" mb-5">
            <img className="timeline" src={timeLine2} />
          </div>

          <div className="row">
            <div className="col-5 offset-ms-1  carrouselText">
              <h2>What is Oviva Care?</h2>
              <p>
                Our mission is to create a future where every woman has the
                Knowledge, Resources, and Support to live her best life.
                Pellentesque non tincidunt eget molestie libero. Aenean ut quis
                adipiscing amet. Sociis imperdiet luctus eget sagittis nisl. Sed
                ut lectus amet nulla lectus vitae. Mattis volutpat natoque ac
                quis vestibulum.
              </p>
              <h3>TO LIVE HER BEST LIFE!</h3>
            </div>

            <div className="col-6 carrousel">
              <Slider {...settings}>
                <div className="carrouselImg">
                  <img src={LandingSlice12} alt="Slide 1" />
                </div>
                <div className="carrouselImg">
                  <img src={LandingSlice2} alt="Slide 2" />
                </div>
                <div className="carrouselImg">
                  <img src={LandingSlice3} alt="Slide 3" />
                </div>
              </Slider>
            </div>
            </div>
{/**+******************************************comments******************************************+ */}
            <div className='wrapper'>
              <div>
                <img src={timeline3} />
              </div>

              <div className="sayingDiv">
                <h2 className="secondaryTitle saying">
                  What people are saying
                </h2>
              </div>

              <div className="d-flex gap-5 comments">
                <div className="commentDiv">
                  <div className="roundedimageContainer">
                    <img
                      className="roundedImage"
                      src={Opinion1}
                      alt="User Opinion 1"
                    />
                  </div>
                  <p className="comillas">”</p>
                  <p className="commentText">
                    In Agnieszka I found a professional and at the same time
                    human curiosity - devoid of any form of judgment. NO ANY
                    PRE-SET PLAN. Agnieszka supported me through a customized
                    program based on my symptoms. I learnt to take care of my
                    thoughts, my spaces, my daily routine and all of this is
                    having such a profound impact on my whole life!
                  </p>
                  <p className="commentName">MANUELA</p>
                </div>

                <div className="commentDiv">
                  <div className="roundedimageContainer">
                    <img
                      className="roundedImage"
                      src={Opinion2}
                      alt="User Opinion 2"
                    />
                  </div>

                  <p className="comillas">”</p>

                  <p className="commentText">
                    I was diagnosed with PCOS a few years ago. It was Agnieszka
                    who drew my attention to test myself in this direction when
                    I told her how I felt and what my symptoms were. Thanks to
                    her, I am definitely more aware of the direction in which I
                    should be going. I am only at the beginning of this road,
                    because I have recently decided to stop taking birth
                    control. I believe that with her help I will achieve my
                    health goal.
                  </p>
                  <p className="commentName">PATRYCJA</p>
                </div>
              </div>
            </div>
        
{/****************************************bottom section*************************************** */}
            <div className="bottomSection wrapper">
            <img src={orangeBottom} alt="background" className="orangeBottomImage" />

            <div className="bottomWrapper">
              <div className="bottom-Image-container">
                <img
                  className="bottom-Image"
                  src={ImageFooterSin}
                  alt="bootom image"
                />
              </div>

              <div className="bottom-details">
                <h3>SIGN UP NOW</h3>
                <p>WEBINAR DAY 10TH SEPTEMBER 2024</p>
                <h2>Boost Your Mood & Get Back Your Energy</h2>
                <Link to="/landing-form">
                  <button className="mainButton bottomButton">SAVE YOUR SPOT</button>
                </Link>
              </div>
            </div>
            </div>

{/*****************************************footer*********************************************** */}
          <div className="footer wrapper">
            <div className="d-flex interFooterDiv ">
              <div className="d-flex footerIcons">
                <FaFacebook />
                <FaInstagram />
                <FaLinkedin />
              </div>
              <div>
                <h5>CONTACT US</h5>
              </div>
            </div>
            <div className="d-flex justify-content-around mt-3">
              <div>
                <p>@ all rights reserved to Oviva Care</p>
              </div>
              <div className="d-flex justify-content-around">
                <p>Privacy</p>
                <p>Terms and condition</p>
                <p>Cookies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default LandingPage;
