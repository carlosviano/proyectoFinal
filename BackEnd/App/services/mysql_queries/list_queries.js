import db from "../mysql.js";
import moment from "moment/moment.js";

const listQueries = {};


listQueries.getShowByName = async(id,showName) => {
    let conn = null;
    try {
        conn = await db.createConnection();
        return await db.query('SELECT * from list where name = ? and user = ? ',[showName,id],'select',conn)
    } catch(e){
        throw new Error(e)
    } finally {
        conn && await conn.end()
    }
}

listQueries.addToList = async (id, itemData) => {
    let conn = null;
    try{
        conn = await db.createConnection();

        let itemObj = {
            name: itemData.name, 
            type: itemData.type,
            user:id,
            reg_date:moment().format("MMM Do YY")
        }
        return await db.query('INSERT INTO list SET ?',itemObj, 'insert',conn)
    } catch(e){
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}

export default listQueries