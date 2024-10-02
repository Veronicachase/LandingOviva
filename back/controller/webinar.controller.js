const webinarDao = require("../dao/webinarDao");

const addWebinarData = async (req, res) => {
   
  try {
    
    const webinarData = req.body

    const webinarId = await webinarDao.addWebinarEmail(webinarData);

    res.status(201).json({ message: "Email successfully send", id: webinarId });
  } catch (error) {
    console.error("Error registering email:", error.message);
    res.status(500).json({ error: error.message });
  }

 } 
 

 const getWebinarData = async (req, res) => {
   
  try {
    
    const webinarData = req.body

    const webinarDataId = await webinarDao.getWebinarData(webinarData);

    res.status(201).json({ message: "Date successfully send", id: webinarDataId });
  } catch (error) {
    console.error("Error registering email:", error.message);
    res.status(500).json({ error: error.message });
  }

 } 
 
 
 module.exports = { addWebinarData,getWebinarData };
