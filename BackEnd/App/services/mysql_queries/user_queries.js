import db from "../mysql.js ";
import moment from "moment/moment.js";
import md5 from "md5";
import utils from "../../utils/utils.js";

const userQueries = {};

userQueries.getUserByEmail = async (email) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * from user WHERE email = ?",
      email,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.addUser = async (userData) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    let userObj = {
      name: userData.name,
      surname: userData.surname,
      email: userData.email,
      username: userData.username,
      password: md5(userData.password),
      reg_date: moment().format("YYYY-MM-DD"),
    };
    return await db.query("INSERT INTO user SET ?", userObj, "insert", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.addRecentUser = async (searchedUser, id) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    let userObj = {
      user: id,
      searcheduser: searchedUser,
    };

    return await db.query(
      "INSERT into recentuser set ?",
      [userObj],
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.addRecentShow = async (showData, id) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    let showObj = {
      image: showData.img,
      showid: showData.idShow,
      name: showData.name,
      title: showData.title,
      rating: showData.rating,
      user: id,
    };
    showObj = await utils.removeUndefinedKeys(showObj);
    return await db.query(
      "INSERT INTO recentshows SET ?",
      showObj,
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.updateImage = async (id, imageData) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    let userObj = {
      img: imageData.img,
    };
    return await db.query(
      "Update user SET ? WHERE iduser = ?",
      [userObj, id],
      "update",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.getUserById = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT user.iduser,user.username, user.reg_date,user.img as profilePicture FROM user WHERE iduser = ? group by iduser",
      id,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.getListById = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * from list where user = ?",
      id,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.getPostById = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT json_arrayagg(post.img) as imagesPost, json_arrayagg(post.title) as postTitles, json_arrayagg(post.text) as postText,  json_arrayagg(post.idpost) as postId FROM post WHERE user = ?",
      id,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.getFeedById = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT post.*, user.username, user.img as profilePicture FROM follows LEFT JOIN post ON post.user = follows.following JOIN user on post.user = user.iduser WHERE follows.user = ? order by idpost desc",
      id,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.updateUser = async (id, userData) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    let userObj = {
      name: userData.name,
      surname: userData.surname,
      username: userData.username,
      email: userData.email,
      password: userData.password ? md5(userData.password) : undefined,
    };
    userObj = await utils.removeUndefinedKeys(userObj);
    return await db.query(
      "Update user SET ? WHERE iduser = ?",
      [userObj, id],
      "update",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.getUserByUsername = async (username) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM user WHERE username like ? ",
      ["%" + username + "%"],
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.getFollowsById = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT json_arrayagg(follows.following) as following from follows WHERE user = ?",
      id,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.unfollowUserById = async (user, id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "DELETE from follows where user = ? AND following = ? ",
      [user, id],
      "delete",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.followUserById = async (user, id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    let userObj = {
      user: user,
      following: id,
    };
    return await db.query(
      "INSERT INTO follows set ?  ",
      [userObj],
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.followSelf = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    let userObj = {
      user: id,
      following: id,
    };
    return await db.query(
      "INSERT INTO follows set ?  ",
      [userObj],
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.countFollowers = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    return await db.query(
      "SELECT COUNT(user) as followers from follows WHERE following = ?",
      id,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn & (await conn.end);
  }
};

userQueries.countFollowing = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    return await db.query(
      "SELECT COUNT(user) as following from follows WHERE user = ?",
      id,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn & (await conn.end);
  }
};

userQueries.getRecentUsers = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    return await db.query(
      "SELECT distinct user.* from user JOIN recentuser on user.iduser = recentuser.searcheduser where recentuser.user = ?",
      id,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn & (await conn.end);
  }
};

userQueries.getRecentShows = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    return await db.query('SELECT DISTINCT image,user, showid, name, title, rating FROM recentshows where user = ?', id, "select", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn & (await conn.end);
  }
};

userQueries.deleteUserHistory = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection()

    return await db.query('DELETE FROM recentuser where user = ?', id, "delete", conn)

  } catch (e) {
    throw new Error(e)
  } finally {
    conn & await conn.end
  }
}

userQueries.deleteShowsHistory = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection()

    return await db.query('DELETE FROM recentshows where user = ?', id, "delete", conn)

  } catch (e) {
    throw new Error(e)
  } finally {
    conn & await conn.end
  }
}

export default userQueries;
