import db from "../mysql.js";
import moment from "moment/moment.js";
import utils from "../../utils/utils.js";

const listQueries = {};


listQueries.getShowByName = async (id, showName) => {
    let conn = null;
    try {
        conn = await db.createConnection();
        return await db.query('SELECT * from list where name = ? and user = ? ', [showName, id], 'select', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end()
    }
}

listQueries.addToList = async (id, itemData) => {
    let conn = null;
    try {
        conn = await db.createConnection();

        let itemObj = {
            name: itemData.name,
            type: itemData.type,
            user: id,
            reg_date: moment().format("MMM Do YY")
        }
        return await db.query('INSERT INTO list SET ?', itemObj, 'insert', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}

listQueries.updateList = async (id, listData) => {
    let conn = null
    try {
        conn = await db.createConnection();

        let listObj = {
            name: listData.name,
            rating: listData.rating,
            state: listData.state
        }
        listObj = await utils.removeUndefinedKeys(listObj)
        return await db.query('Update list SET ? WHERE user = ? and name = ?', [listObj, id, listData.name], 'update', conn)
    } catch (e) {
        throw new Error(e);
    } finally {
        conn && await conn.end();
    }
}

listQueries.removeShow = async (show, id) => {
    let conn = null
    try {
        conn = await db.createConnection();
        return await db.query('DELETE FROM List where name = ? and user = ?', [show, id,], 'delete', conn)
    } catch (e) {
        throw new Error(e);
    } finally {
        conn && await conn.end();
    }
}
export default listQueries