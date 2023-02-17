import db from "../mysql.js";
import moment from "moment/moment.js";

const publicationQueries = {};

publicationQueries.addPublication = async (id, publicationData) => {
    let conn = null;
    try{
        conn = await db.createConnection();

        let userObj = {
            img: publicationData.img,
            text: publicationData.text,
            title:publicationData.title,
            user:id,
            reg_date:moment().format('YYYY-MM-DD')
        }
        return await db.query('INSERT INTO post SET ?',userObj, 'insert',conn)
    } catch(e){
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}

export default publicationQueries;
