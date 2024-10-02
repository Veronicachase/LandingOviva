
const express = require("express");
const { addWebinarDate  } = require("../controllers/webinarController");

const webinarRouter = express.Router(); 


webinarRouter.post("/add-webinar-date", addWebinarDate); 

module.exports = webinarRouter;