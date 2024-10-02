const express = require("express");
const { addWebinarData,getWebinarData } = require("../controllers/webinarEmailController");

const WebinarRouter = express.Router(); 

WebinarRouter.post("/", addWebinarData); 
WebinarRouter.get("/webinar-date", getWebinarData); 

module.exports = WebinarRouter;

