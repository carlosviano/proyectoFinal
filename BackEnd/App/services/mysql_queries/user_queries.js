import db from "../mysql.js ";
import moment from "moment/moment.js";
import md5 from "md5";
import utils from "../../utils/utils.js";

const userQueries = {};

userQueries.getUserByEmail = async (email) => {
    let conn = null
    try {
        conn = await db.createConnection();
        return await db.query('SELECT * from user WHERE email = ?', email, 'select', conn)

    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end()
    }
}

userQueries.addUser = async (userData) => {
    let conn = null;
    try {
        conn = await db.createConnection();

        let userObj = {
            name: userData.name,
            surname: userData.surname,
            email: userData.email,
            password: md5(userData.password),
            reg_date: moment().format('YYYY-MM-DD')
        }
        return await db.query('INSERT INTO user SET ?', userObj, 'insert', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}

userQueries.updateImage = async (id, imageData) => {
    let conn = null
    try {
        conn = await db.createConnection();

        let userObj = {
            img: imageData.img
        }
        return await db.query('Update user SET ? WHERE iduser = ?', [userObj, id], 'update', conn)
    } catch (e) {
        throw new Error(e);
    } finally {
        conn && await conn.end();
    }
}

userQueries.getUserById = async (id) => {
    let conn = null
    try {
        conn = await db.createConnection();
        return await db.query('SELECT user.iduser,user.username, user.reg_date,user.img as profilePicture, json_arrayagg(post.img) as imagesPost, json_arrayagg(post.title) as postTitles, json_arrayagg(post.text) as postText,  json_arrayagg(post.idpost) as postId FROM post JOIN user on post.user = user.iduser WHERE iduser = ? group by iduser', id, 'select', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}

userQueries.getListById = async (id) => {
    let conn = null
    try {
        conn = await db.createConnection();
        return await db.query('SELECT * from list where user = ?', id, 'select', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}

userQueries.getFeedById = async (id) => {
    let conn = null
    try {
        conn = await db.createConnection();
        return await db.query('SELECT post.*, user.username, user.img as profilePicture FROM follows LEFT JOIN post ON post.user = follows.following JOIN user on post.user = user.iduser WHERE follows.user = ? order by idpost desc', id, 'select', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}

userQueries.updateUser = async (id, userData) => {
    let conn = null
    try {
        conn = await db.createConnection();

        let userObj = {
            name: userData.name,
            surname: userData.surname,
            username: userData.username,
            email: userData.email,
            password: userData.password ? md5(userData.password) : undefined,
        }
        userObj = await utils.removeUndefinedKeys(userObj)
        return await db.query('Update user SET ? WHERE iduser = ?', [userObj, id], 'update', conn)
    } catch (e) {
        throw new Error(e);
    } finally {
        conn && await conn.end();
    }
}

userQueries.getUserByUsername = async (username) => {
    let conn = null
    try {
        conn = await db.createConnection();
        return await db.query('SELECT * FROM user WHERE username like ? ', ['%' + username + '%'], 'select', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}

userQueries.getFollowsById = async (id) => {
    let conn = null
    try {
        conn = await db.createConnection();
        return await db.query('SELECT json_arrayagg(follows.following) as following from follows WHERE user = ?', id, 'select', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}

userQueries.unfollowUserById = async (user, id) => {
    let conn = null
    try {
        conn = await db.createConnection();
        return await db.query('DELETE from follows where user = ? AND following = ? ', [user, id], 'delete', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end()
    }
}

userQueries.followUserById = async (user, id) => {
    let conn = null
    try {
        conn = await db.createConnection();
        let userObj = {
            user: user,
            following: id
        }
        return await db.query('INSERT INTO follows set ?  ', [userObj], 'delete', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end()
    }
}

userQueries.countFollowers = async (id) => {
    let conn = null
    try {
        conn = await db.createConnection();

        return await db.query('SELECT COUNT(user) as followers from follows WHERE following = ?', id, 'select', conn)

    } catch (e) {
        throw new Error(e)
    } finally {
        conn & await conn.end
    }
}
userQueries.countFollowing = async (id) => {
    let conn = null
    try {
        conn = await db.createConnection();

        return await db.query('SELECT COUNT(user) as following from follows WHERE user = ?', id, 'select', conn)

    } catch (e) {
        throw new Error(e)
    } finally {
        conn & await conn.end
    }
}
export default userQueries