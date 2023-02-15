import db from "../mysql.js ";
import moment from "moment/moment.js";
import md5 from "md5";
import utils from "../../utils/utils.js";

const userQueries = {};

userQueries.getUserByEmail = async (email) => {
    let conn = null 
    try{
        conn = await db.createConnection();
        return await db.query('SELECT * from user WHERE email = ?', email, 'select',conn)

    } catch (e){
        throw new Error(e)
    } finally {
        conn && await conn.end()
    }
}

userQueries.addUser = async (imageData) => {
    let conn = null;
    try{
        conn = await db.createConnection();

        let userObj = {
            name: userData.name, 
            surname: userData.surname,
            email: userData.email,
            password: md5(userData.password),
            reg_date: moment().format('YYYY-MM-DD HH:mm:ss')
        }
        return await db.query('INSERT INTO user SET ?',userObj, 'insert',conn)
    } catch(e){
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}

userQueries.updateImage = async (id,imageData) => {
    let conn = null
    try{
        conn =  await db.createConnection();

        let userObj = {
            img: imageData.img
        }
        return await db.query('Update user SET ? WHERE iduser = ?', [userObj,id], 'update', conn)
    } catch (e){
        throw new Error(e);
    } finally {
        conn && await conn.end();
    }
}

userQueries.getUserById = async (id) => {
    let conn = null
    try{
        conn = await db.createConnection();
        return await db.query('SELECT * FROM user WHERE iduser = ?', id, 'select',conn)
    } catch(e){
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}


export default userQueries