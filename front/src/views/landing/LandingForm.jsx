import { useState, useEffect } from "react";
import getActivityDate from "../../apis/getActivityDate";
import addWebinarData from "../../apis/addWebinarData";
import { useNavigate } from "react-router-dom";
import headerImage from '../../assets/images/LandingHero1.png';
import '@fontsource/montserrat';
import '@fontsource/fahkwang';
import Logo from '../../assets/images/logotype_fullcolor_rgb 1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './landingForm.css';

const LandingForm = () => {
 
  const [activityDate, setActivityDate] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    age: "",
    mainStruggle: "",
  });
  const navigate = useNavigate();


  useEffect(() => {
    const fetchActivityDate = async () => {
      try {
        const date = await getActivityDate();
        setActivityDate(date);
      } catch (error) {
        console.error("Error fetching activity date:", error);
      }
    };
    fetchActivityDate();
  }, []);

 
  const handleSubmitButton = async (e) => {
    e.preventDefault();
    try {
      const successful = await addWebinarData(formData);
      if (successful) {
        navigate("/successfull-registry");
      }
    } catch (error) {
      console.error("Error adding webinar data:", error);
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const day = activityDate.day || "";
  const month = activityDate.month || "";
  const year = activityDate.year || "";

  return (
  <div className="container-fluid main relative h-dvh ">
  <img className="hero img-fluid h-dvh " src={headerImage} alt="Hero" />
  <img className="logo img-fluid" src={Logo} alt="Logo" />
  
  <div className="modal-container d-flex flex-column F-Family absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 py-5 px-8 rounded-[32px]">
    <h4>
      {day} {month} {year} 12 PM - 1 PM CET
    </h4>
    <h1>Boost Your Mood & Get Back Your Energy</h1>
    <form onSubmit={handleSubmitButton} className="form ">
      {/* Primera fila: Name y Last Name */}
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
      </div>

      {/* Segunda fila: Email ocupa toda la fila */}
      <div className="row mb-3 ">
        <div className="col-12 full-width-email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-control "
            required
          />
        </div>
      </div>

      {/* Tercera fila: Age y Main Struggle */}
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="age">Age</label>
          <select
            name="age"
            id="age"
            value={formData.age}
            onChange={handleInputChange}
            className="form-select"
            required
          >
            <option value="" disabled>
              Select Age
            </option>
            <option value="18-24">18-24</option>
            <option value="25-34">25-34</option>
            <option value="35-44">35-44</option>
            <option value="45-54">45-54</option>
            <option value="55-64">55-64</option>
            <option value="65+">65+</option>
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="mainStruggle">Main Struggle</label>
          <select
            name="mainStruggle"
            id="mainStruggle"
            value={formData.mainStruggle}
            onChange={handleInputChange}
            className="form-select"
            required
          >
            <option value="" disabled>
              Main Struggle
            </option>
            <option value="pain">Pain</option>
            <option value="pregnant">Getting pregnant</option>
            <option value="focus">Focus</option>
            <option value="anxiety">Anxious</option>
            <option value="acne">Acne</option>
            <option value="sleep">Sleep</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Botón de enviar */}
      <button type="submit" className="mainButton">
        SAVE YOUR SPOT
      </button>
    </form>
  </div>
</div>

  );
};

export default LandingForm;

