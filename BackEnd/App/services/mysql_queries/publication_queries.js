import db from "../mysql.js";
import moment from "moment/moment.js";

const publicationQueries = {};

publicationQueries.addPublication = async (id, publicationData) => {
    let conn = null;
    try {
        conn = await db.createConnection();

        let userObj = {
            img: publicationData.img,
            text: publicationData.text,
            title: publicationData.title,
            user: id,
            reg_date: moment().format('MMMM Do YYYY, h:mm:ss a')
        }
        return await db.query('INSERT INTO post SET ?', userObj, 'insert', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}

publicationQueries.deletePostById = async (id) => {
    let conn = null;
    try {
        conn = await db.createConnection();

        return await db.query('DELETE FROM post WHERE idpost = ?', id, 'delete', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}
export default publicationQueries;
