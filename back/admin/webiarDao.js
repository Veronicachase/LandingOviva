const db = require("../dataBase/db");
const moment = require("moment");
const { removeUndefinedKeys } = require("../utils/removeUndefinedKeys");
const webinarDao= {};


webinarDao.addActivityDate = async (webinarDate)=>{
    let conn = null;
    try {
      conn = await db.createConnection();
      let ActivityDateObj={
        activityDate:webinarDate.activityDate
      };
    ActivityDateObj = await removeUndefinedKeys(ActivityDateObj);
    let result = await db.query("INSERT INTO webinardate SET ?", ActivityDateObj, "insert", conn);
    return result.insertId
      
    } catch (e) {
      console.error(e.message);
      throw e;
    } finally {
      if (conn) conn.release();
    }
    
    }