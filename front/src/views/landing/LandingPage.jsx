import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import headerImage from "../../assets/images/LandingHero1.png";
import Logo from "../../assets/images/logotype_fullcolor_rgb 1.png";
import orangeTopLarge from "../../assets/images/top-orange-large.png";
import orangeTopSmall from "../../assets/images/Top-orange-small.png";
import orangeBottomLarge from "../../assets/images/bottom-orange-large.png";
import orangeBottomSmall from "../../assets/images/bottom-orange-small.png";
import iconPoint from "../../assets/images/Color=Orange-Number=No-Size=96-Device=Desktop.png";
import iconPoint1 from "../../assets/images/Color=Default-Number=Yes-Size=80-Device=Mobile.png";
import scarfWomanImg from "../../assets/images/scarfWoman.png";
import timeline1 from "../../assets/images/Type=Line-group-Group=1-Device=Desktop.png";
import timeline2 from "../../assets/images/Type=Line-group, Group=2, Device=Desktop.png";
import timeline3 from "../../assets/images/Type=Line-group-Group=3-Device=Desktop.png";
import timeline4 from "../../assets/images/Type=Line-group-Group=4-Device=Desktop.png";
import timeline2Small from "../../assets/images/timeline2-mobile.png";
import timeline3Small from "../../assets/images/timeline3-mobile.png";
import LandingSlice12 from "../../assets/images/LandingSlice1.2.png";
import LandingSlice2 from "../../assets/images/landingSlice2.jpg";
import LandingSlice3 from "../../assets/images/landingSlice3.png";
import ImageFooterSin from "../../assets/images/ImageFooterSin.png";
import Agniezka from "../../assets/images/Col-left-Agniezka.png";
import Opinion1 from "../../assets/images/opinion1.jpeg";
import Opinion2 from "../../assets/images/opinion2.1.jpeg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "@fontsource/montserrat";
import "@fontsource/fahkwang";
import "./landingPage.css";

function LandingPage() {
  const [timeLeft, setTimeleft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const dueDate = new Date("2024-10-25T13:00:00");
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
    <div className=" w-dvw">
      <div className="position-relative">
        <img className="hero" src={headerImage} alt="Hero" />
        <img className="logo" src={Logo} alt="Logo" />

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
      <div />
      {/********************************************second block ****************************************** */}
      <div className="secondary w-dvw mb-5">
        <picture className="orangeTopContainer">
          <source media="(min-width: 768px)" srcSet={orangeTopLarge} />
          <source media="(max-width: 767px)" srcSet={orangeTopSmall} />
          <img src={orangeTopLarge} alt="Time Line" className="orangeTop" />
        </picture>

        <div className="webinarInfo">
          <h1 className="orangeTitle">Webinar starts in</h1>
          <div className="d-flex mb-5 mt-5 round-container">
            <div className="d-flex flex-column ">
              <div className="round ">
                <h1>{timeLeft.days} </h1>
              </div>
              <div>
                <h5> DAYS </h5>
              </div>
            </div>

            <div className="d-flex flex-column">
              <div className="round">
                <h1>{timeLeft.hours} </h1>
              </div>
              <div>
                <h5> HOURS </h5>
              </div>
            </div>

            <div className="d-flex flex-column">
              <div className="round">
                <h1>{timeLeft.minutes} </h1>
              </div>
              <div>
                <h5> MINUTES </h5>
              </div>
            </div>
          </div>

          <Link to="/landing-form">
            <button className="mainButton">SAVE YOUR SPOT</button>
          </Link>
        </div>
      </div>
      {/************************************************* feeling******************************************** */}

      <div className="flex flex-col px-4 justify-center">
         
   
         <div className="flex flex-col ml-4 mr-4 ">
         <h1 className="text-5xl mb-4 secondaryTitle ">Are you feeling:</h1>
                 <div className="mb-4">
                   <img src={iconPoint} className="w-12 md:w-32 lg:w-48" alt="Exhausted" />
                   <p className="mt-[-30px] ml-[20px] font ">
                     <strong>EXHAUSTED</strong> No matter how much you sleep?
                   </p>
                 </div>
                 
                 <div className="mb-4">
                   <img src={iconPoint} className="w-12 md:w-32 lg:w-48"alt="Foggy-headed" />
                   <p className="mt-[-30px] ml-[20px] font">
                     <strong>FOGGY-HEADED</strong> and unable to focus?
                   </p>
                 </div>
                 <div className="mb-4">
                   <img src={iconPoint} className="w-12 md:w-32 lg:w-48" alt="Hungry" />
                   <p className="mt-[-30px] ml-[20px] font">
                     <strong>HUNGRY</strong> Shortly after eating?
                   </p>
                 </div>
                <div className="mb-4">
                   <img src={iconPoint} className="w-12 md:w-32 lg:w-48" alt="Anxious" />
                   <p className="mt-[-30px] ml-[20px] font">
                     <strong>ANXIOUS</strong> And on edge?
                   </p>
                 </div>
          
               <div className="mb-5">
                   <img src={iconPoint} className="w-12 md:w-32 lg:w-48" alt="Craving Sugar" />
                   <p className="mt-[-30px] ml-[20px] font">
                     <strong>CRAVING SUGAR</strong> All the time?
                   </p>
               </div>

          </div>
     
               <div className="image-container justify-center">
                 <img  src={scarfWomanImg} alt="Scarf Woman" />
               </div>
     
         </div>
 
    
      {/*************************************************dive into******************************************** */}

      <div className="flex flex-col px-4 justify-center mt-4">
        <picture className="TimeLinePIcture">
          <source media="(min-width: 768px)" srcSet={timeline1} />
          <source media="(max-width: 767px)" srcSet={timeline3Small} />
          <img src={timeline1} alt="time Line Division" className="timeLine" />
        </picture>

        <div className="flex mb-4">
          <h2 className="secondaryTitle">What we´ll dive into: </h2>
        </div>

        <div className="">

          <div className="mb-4">
            <img src={iconPoint1} className="w-12 md:w-32 lg:w-48" alt="Icon 1" />
            <div className="mt-[-35px] ml-[60px] font text-base">  
            <strong>UNDERSTANDING THE SYMPTOMS:</strong>
            <p>
              Explore the causes of fatigue, brain-fog, anxiety, sleep issues,
              and sugar cravings.
            </p>
            </div>
          </div>

          <div className="mb-4">
            <img src={iconPoint1} className="w-12 md:w-32 lg:w-48" alt="Icon 2" />
            <div className="mt-[-35px] ml-[60px] font text-base">
            <strong>PRACTICAL TIPS:</strong>
            <p className="">
              Gain simple, everyday strategies to combat brain fog, improve
              focus, and manage and reduce symptoms.
            </p>
            </div>
          </div>

          <div className="mb-4">
            <img src={iconPoint1} className="w-12 md:w-32 lg:w-48" alt="Icon 3" />
            <div className="mt-[-35px] ml-[60px] font text-base">
            <strong>ROOT CAUSES AND SOLUTIONS:</strong>
            <p className="">
              Identify what´s contributing to your anxiety and sleep problems
              and get actionable solutions to start feeling better.
            </p>
            </div>
          </div>

          <div className="mb-4">
            <img src={iconPoint1} className="w-12 md:w-32 lg:w-48" alt="Icon 4" />
            <div className="mt-[-35px] ml-[60px] font text-base">
            <strong>HORMONAL SHIFTS:</strong>
            <p className="">
              Learn how hormonal changes affect these symptoms and uncover
              what´s really going on in your body.
            </p>
            </div>
          </div>

          <div className="mb-4">
            <img src={iconPoint1} className="w-12 md:w-32 lg:w-48" alt="Icon 5" />
            <div className="mt-[-35px] ml-[60px] font text-base">
            <strong>BALANCING HORMONES:</strong>
            <p className="diveIntoPoint">
              Discover ways to balance your hormones and curb your sugar
              craving.
            </p>
            </div>
          </div>

          <div className="mb-4">
            <img src={iconPoint1} className="w-12 md:w-32 lg:w-48" alt="Icon 6" />
            <div className="mt-[-35px] ml-[60px] font text-base">
            <strong>COMMUNITY SUPPORT:</strong>
            <p className="diveIntoPoint">
              Connect with other women facing similar challenges and share
              experiences.
            </p>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mb-5">
          <Link to="/landing-form">
            <button className="mainButton">SAVE YOUR SPOT</button>
          </Link>
        </div>

        {/**+******************************************Agniezka******************************************+ */}
        <div className="">
          <picture className="TimeLinePIcture ">
            <source media="(min-width: 768px)" srcSet={timeline2} />
            <source media="(max-width: 767px)" srcSet={timeline2Small} />
            <img
              src={timeline2}
              alt="time Line Division"
              className="timeLine  mb-4"
            />
          </picture>

          <div className="">
            <div className="agnieszkaImage">
              <img src={Agniezka} />
            </div>

            <div className="mt-3 ml-4 mb-4">
              <p className="secondaryTitle mb-4 ml-0">Meet our speaker</p>
              <p className="mb-4 secondaryText font-semibold">AGNIESZKA FRONIA</p>
              <p className="text-base longText mb-3">
                Hi, I am Agnieszka and I am a certified women’s health expert
                with a passion for helping others.
              </p>

              <p className="text-base longText mb-3">
                For many years, I struggled with hormonal health issues such as
                acne, hair loss, weight gain, absence of periods, insomnia, and
                high levels of stress and anxiety. Feeling confused, tired, and
                often ignored by many doctors, I decided to take control of my
                health.
              </p>

              <p className="text-base longText mb-3">
                Since 2015, I´ve traveled across South America and India,
                exploring various methods to resolve my symptoms. Along the way,
                I became a certified yoga, meditation, and breath-work teacher.
              </p>
              <p className="text-base longText mb-3">
                Additionally, I earned an MSc in Psychological Medicine and
                Mental Health from London Metropolitan University, focusing on
                hormones, inflammation, and gut health.
              </p>
              <p className="text-base longText mb-3">
                My goal is to help you navigate your hormonal, physical,
                psychological, and emotional health with ease.
              </p>

              <p className="text-base longText mb-3">
                Join my upcoming webinar so we can get to know each other better
                and gain the knowledge you need to take control of your health.
              </p>
            </div>
          </div>
        </div>
        {/**+******************************************carrousel******************************************+ */}
        <div className="">
          <picture className="TimeLinePIcture mt-3 mb-3">
            <source media="(min-width: 768px)" srcSet={timeline3} />
            <source media="(max-width: 767px)" srcSet={timeline3Small} />
            <img
              src={timeline3}
              alt="time Line Division"
              className="timeLine w-100"
            />
          </picture>

          <div className="">
            <div className="">
              <h2 className="secondaryTitle mb-4">What is Oviva Care?</h2>
              <p className="text-base longText mb-4  tracking-wider">
                Our mission is to create a future where every woman has the
                Knowledge, Resources, and Support to live her best life.
                Pellentesque non tincidunt eget molestie libero. Aenean ut quis
                adipiscing amet. Sociis imperdiet luctus eget sagittis nisl. Sed
                ut lectus amet nulla lectus vitae. Mattis volutpat natoque ac
                quis vestibulum.
              </p>
              <h3 className="text-2xl  mb-4">TO LIVE HER BEST LIFE!</h3>
            </div>

            <div className=" carrousel">
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
          <div className="mt-4">

            <picture className="TimeLinePIcture">
              <source media="(min-width: 768px)" srcSet={timeline4} />
              <source media="(max-width: 767px)" srcSet={timeline2Small} />
              <img
                src={timeline4}
                alt="time Line Division"
                className="timeLine w-100"
              />
            </picture>



        
              <h2 className="secondaryTitle mb-4">
                What people <br /> are saying
              </h2>
        

            
            <div className="flex flex-col  md:flex-row gap-y-5 ">

              <div className="comment p-4 ">
                <div className=" mt-4 bg-white">
                  <img
                    className="rounded-full w-6/12  h-2/4"
                    src={Opinion1}
                    alt="User Opinion 1"
                  />
                </div>
                <p className="comillas">”</p>
                <p className="text-base longText">
                  In Agnieszka I found a professional and at the same time human
                  curiosity - devoid of any form of judgment. NO ANY PRE-SET
                  PLAN. Agnieszka supported me through a customized program
                  based on my symptoms. I learnt to take care of my thoughts, my
                  spaces, my daily routine and all of this is having such a
                  profound impact on my whole life!
                </p>
                <p className="commentName">MANUELA</p>
              </div>


              <div className="comment flex-col p-4">
                <div className="rounded-full rounded-full w-2/3 h-2/3 justify-center bg-white">
                  <img
                    className="rounded-full w-6/12  h-2/4"
                    src={Opinion2}
                    alt="User Opinion 2"
                  />
                </div>

                <p className="comillas">”</p>

                <p className="text-base longText">
                  I was diagnosed with PCOS a few years ago. It was Agnieszka
                  who drew my attention to test myself in this direction when I
                  told her how I felt and what my symptoms were. Thanks to her,
                  I am definitely more aware of the direction in which I should
                  be going. I am only at the beginning of this road, because I
                  have recently decided to stop taking birth control. I believe
                  that with her help I will achieve my health goal.
                </p>
                <p className="commentName">PATRYCJA</p>
              </div>
              
            </div>
            
          </div>

          {/****************************************bottom section*************************************** */}
          <div className="bottomSection">
            <picture className="w-dvw">
              <source media="(min-width: 768px)" srcSet={orangeBottomLarge} />
              <source media="(max-width: 767px)" srcSet={orangeBottomSmall} />
              <img
                src={orangeBottomLarge}
                alt="Orange background"
                className="bottomOrange w-dvw"
              />
            </picture>

            <div className="bottomWrapper">
              <div className="bottom-Image-container">
                <img
                  className="bottom-Image"
                  src={ImageFooterSin}
                  alt="bottom image"
                />
              </div>

              <div className="bottom-details">
                <h3>SIGN UP NOW</h3>
                <p>WEBINAR DAY 10TH SEPTEMBER 2024</p>
                <h2>Boost Your Mood & Get Back Your Energy</h2>
                <Link to="/landing-form">
                  <button className="mainButton bottomButton">
                    SAVE YOUR SPOT
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/*****************************************footer*********************************************** */}
          
        <div className="flex-col mt-4">
          
          <div className="flex justify-between mb-3">

              <div className="flex gap-x-5 text-2xl">
                <FaFacebook />
                <FaInstagram />
                <FaLinkedin />
              </div>

                <div>
                  <h5><strong>CONTACT US </strong></h5>
                </div>
              </div>


            <div className="flex flex-col mb-3">
            
              <div className="flex justify-between mb-3">
                <p>Privacy</p>
                <p>Terms and condition</p>
                <p>Cookies</p>
              </div>

              <div className="flex justify-center">
                <p>@ all rights reserved to Oviva Care</p>
              </div>
          </div>
          
         </div>  
                    
         
    

             
          </div>
        </div>
      </div>
   
  );
}

export default LandingPage;




