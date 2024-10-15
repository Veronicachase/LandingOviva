const webinarDao = require("../dao/webinarDao");
const { webinarSubscriber } = require("../apis/mailerLite")



const addWebinarData = async (req, res) => {
  try {
    const webinarData = req.body;
    const { email } = webinarData;

    const webinarId = await webinarDao.addWebinarData(webinarData);

    try {
      //const result = await webinarSubscriber(email);
      console.log('Usuario suscrito a MailerLite:', result);
    } catch (mlError) {
     
      console.error("Error al suscribir a MailerLite:", mlError.response ? mlError.response.data : mlError.message);
    }

    res.status(201).json({ message: "Datos guardados exitosamente", id: webinarId });
    
  } catch (error) {
    console.error("Error registrando email:", error.message);
    res.status(500).json({ error: error.message });
  }
};


 
 const getWebinarDate = async (req, res) => {
   
  try {
    
    const webinarDate = await webinarDao.getWebinarDate();
    if (!webinarDate){
      return res.status(404).json({message:"No Webinar date found"})
    }
    
    res.status(200).json({ message: "Date successfully requested", date: webinarDate });
  } catch (error) {
    console.error("Error obtaining date:", error.message);
    res.status(500).json({ error: error.message });
  }

 } 

 
 module.exports = { addWebinarData,addWebinarData, getWebinarDate };
