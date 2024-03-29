import { SignJWT } from "jose";
import { currentDir } from "../index.js";
import md5 from "md5";
import dao from "../services/dao.js";

const __dirname = currentDir().__dirname;

const controller = {};

controller.addUser = async (req, res) => {
  const { email, password, name, surname, username } = req.body;

  if (!email || !password || !name || !surname || !username)
    return res.status(400).send("Error al recibir el body");

  try {
    const user = await dao.getUserByEmail(email);

    if (user.length > 0) return res.status(409).send("usuario ya registrado");

    const addUser = await dao.addUser(req.body);

    let getSelf = await dao.getUserByEmail(email);

    [getSelf] = getSelf;

    if (!getSelf)
      return res
        .status(404)
        .send("No se ha podido obtener la informacion de usuario");

    const followSelf = await dao.followSelf(getSelf.iduser);

    if (addUser && followSelf)
      return res.send(`Usuario ${email} con id: ${addUser} registrado`);
  } catch (e) {
    console.log(e.message);
  }
};

controller.addRecentUser = async (req, res) => {
  const { searchedUser } = req.body;

  try {
    const addRecentUser = await dao.addRecentUser(searchedUser, req.params.id);
    return res.send(addRecentUser);

  } catch (e) {
    console.log(e.message);
  }
};

controller.addRecentShow = async (req, res) => {
  if (Object.entries(req.body).length === 0)
    return res.sendStatus(400).send("Error al recibir el body");
  try {
    const addRecentShow = await dao.addRecentShow(req.body, req.params.id)
    return res.send(`Recent show con id ${addRecentShow} agregado`);
  } catch (e) {
    console.log(e.message)
  }
}

controller.loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).send("Error al recibir el body");

  try {
    let user = await dao.getUserByEmail(email);
    if (user.length <= 0) return res.status(404).send("usuario no registrado");
    const clientPassword = md5(password);

    [user] = user;

    if (user.password !== clientPassword)
      return res.status(401).send("Password incorrecta");

    const jwtConstructor = new SignJWT({
      iduser: user.iduser,
      email,
      role: user.role,
      username: user.username,
      name: user.name,
      surname: user.surname,
    });

    const encoder = new TextEncoder();

    const jwt = await jwtConstructor
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(encoder.encode(process.env.JWT_SECRET));

    return res.send({ jwt });
  } catch (e) {
    console.log(e.message);
  }
};

controller.updateImage = async (req, res) => {
  try {
    if (req.files === null) return;

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No se ha cargado ningun archivo");
    }

    if (!req.query) {
      return res.status(400).send("No se ha indicado el id del usuario");
    }

    const images = !req.files.length ? [req.files.file] : req.files.file;
    images.forEach(async (image) => {
      let uploadPath = __dirname + "/public/images/products/" + image.name;
      let BBDDPath = "images/products/" + image.name;
      image.mv(uploadPath, (err) => {
        if (err) return res.status(500).send(err);
      });

      await dao.updateImage(req.params.id, {
        img: BBDDPath,
      });
    });

    return res.send(`Usuario con id ${req.params.id} actualizado`);
  } catch (e) {
    console.log(e.message);
  }
};

controller.getUserById = async (req, res) => {
  try {
    const user = await dao.getUserById(req.params.id);

    const posts = await dao.getPostById(req.params.id);

    if (posts) {
      const publicaciones = posts[0].imagesPost?.map((imagePost, index) => {
        return {
          image: imagePost,
          post: posts[0].postTitles[index],
          text: posts[0].postText[index],
          idpost: posts[0].postId[index],
        };
      });

      const { imagesPost, postTitles, postText, postId, ...rest } = posts[0];
      const list = await dao.getListById(req.params.id);
      const userToFrontFormat = { ...rest, publicaciones, list, user };
      console.log(userToFrontFormat.user[0], "esto es user");
      return res.status(200).send(userToFrontFormat);
    }
  } catch (e) {
    console.log(e.message);
  }
};

controller.updateProfile = async (req, res) => {
  try {
    if (Object.entries(req.body).length === 0)
      return res.sendStatus(400).send("Error al recibir el body");
    await dao.updateUser(req.params.id, req.body);
    return res.send(`Usuario con id ${req.params.id} modificado`);
  } catch (e) {
    console.log(e.message);
  }
};

controller.getUserByUsername = async (req, res) => {
  const { username } = req.body;


  if (!username) return res.status(400).send("Error al recibir el body");
  try {
    const user = await dao.getUserByUsername(username);

    return res.send(user);
  } catch (e) {
    console.log(e.message);
  }
};

controller.getFollows = async (req, res) => {
  try {
    const follows = await dao.getFollowsById(req.params.id);

    if (!follows) {
      console.log("Error when trying to fetch feed");
    }

    return res.send(follows);
  } catch (e) {
    console.log(e.message);
  }
};

controller.unfollowUserById = async (req, res) => {
  const { user } = req.body;
  try {
    const unfollow = await dao.unfollowUserById(user, req.params.id);

    if (!unfollow) {
      console.log("Error when trying to unfollow user");
    }

    return res.send(unfollow);
  } catch (e) {
    console.log(e.message);
  }
};

controller.deleteUserHistory = async (req, res) => {
  try {
    const deleteHistory = await dao.deleteUserHistory(req.params.id)

    if (deleteHistory) {
      return res.send(`History for user ${deleteHistory} deleted successfully`)
    }
  } catch (e) {
    console.log(e.message)
  }
}

controller.deleteShowsHistory = async (req, res) => {
  try {
    const deleteHistory = await dao.deleteShowsHistory(req.params.id)

    if (deleteHistory) {
      return res.send(`History for user ${deleteHistory} deleted successfully`)
    }
  } catch (e) {
    console.log(e.message)
  }
}

controller.followUser = async (req, res) => {
  const { user } = req.body;
  try {
    const startToFollow = await dao.followUserById(user, req.params.id);

    if (!startToFollow) {
      console.log("Error when trying to follow user");
    }

    return res.send("User followed");
  } catch (e) {
    console.log(e.message);
  }
};

controller.countFollows = async (req, res) => {
  try {
    const followers = await dao.countFollowers(req.params.id);

    const following = await dao.countFollowing(req.params.id);

    const userStats = {
      followers: followers,
      following: following,
    };

    if (userStats) {
      console.log("Error when trying to fetch data");
    }

    return res.send(userStats);
  } catch (e) {
    console.log(e.message);
  }
};

controller.getRecentUsers = async (req, res) => {
  try {
    const recentUsers = await dao.getRecentUsers(req.params.id)

    if (recentUsers) {
      return res.send(recentUsers)
    }
  } catch (e) {
    console.log(e.message)
  }
}

controller.getRecentShows = async (req, res) => {
  try {
    const recentShows = await dao.getRecentShows(req.params.id)

    if (recentShows) {
      return res.send(recentShows)
    }
  } catch (e) {
    console.log(e.message)
  }
}


export default controller;
