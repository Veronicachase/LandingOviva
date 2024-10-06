const db = require("../dataBase/db");
const moment = require("moment");
const { removeUndefinedKeys } = require("../middlewares/removeUndefinedKeys");
const webinarDao= {};

webinarDao.addWebinarData = async (webinarData) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    let webinarObj  = {
      registration_date: moment().format("YYYY-MM-DD"),
      email:webinarData.email,
      name:webinarData.name,
      lastName:webinarData.surname,
      age:webinarData.age,
      mainStruggle:webinarData.mainStruggle
    

    };
    webinarObj = await removeUndefinedKeys(webinarObj);
    const result = await db.query("INSERT INTO webinar_registration SET ?", webinarObj  , "insert", conn);
    return result.insertId;
  } catch (e) {
    console.error(e.message);
    throw e;
  } finally {
    if (conn) conn.release();
  }
};



webinarDao.getWebinarData = async (activityDate) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    let result = await db.query(
      "SELECT * FROM webinardate WHERE activityDate = ?",
      [activityDate],  
      "select",
      conn
    );

   
    return result;

  } catch (e) {
    console.error(e.message);
    throw e;

  } finally {
   
    if (conn) {
      conn.release();
    }
  }
};



module.exports = webinarDao;
