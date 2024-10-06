const webinarDao = require("../dao/webinarDao");
const { webinarSubscriber } = require("../apis/mailerLite")

const webinarDao = require("../dao/webinarDao");
const { webinarSubscriber } = require("../apis/mailerLite");

const addWebinarData = async (req, res) => {
  try {
    const webinarData = req.body;
    const { email } = webinarData;

    const webinarId = await webinarDao.addWebinarData(webinarData);

    try {
      const result = await webinarSubscriber(email);
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

 const getWebinarData = async (req, res) => {
   
  try {
    
    const { activityDate } = req.query

    const webinarDataId = await webinarDao.getWebinarData(activityDate);

    res.status(201).json({ message: "Date successfully send", id: webinarDataId });
  } catch (error) {
    console.error("Error registering email:", error.message);
    res.status(500).json({ error: error.message });
  }

 } 
 
 
 module.exports = { addWebinarData,getWebinarData };
