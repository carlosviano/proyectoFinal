import { currentDir } from "../index.js";
import dao from "../services/dao.js";

const __dirname = currentDir().__dirname;

const controller = {};

controller.addPublication = async (req, res) => {
  const { title, text } = req.body;
  if (!title || !text) return res.status(400).send("Error when receiving body");

  try {
    if (req.files === null) return;

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No se ha cargado ningun archivo");
    }

    const images = !req.files.length ? [req.files.file] : req.files.file;
    images.forEach(async (image) => {
      let uploadPath = __dirname + "/public/images/products/" + image.name;
      let BBDDPath = "images/products/" + image.name;
      image.mv(uploadPath, (err) => {
        if (err) return res.status(500).send(err);
      });

      await dao.addPublication(req.params.id, {
        img: BBDDPath,
        title: title,
        text: text,
      });
    });
    return res.send(
      `Publicacion de usuario ${req.params.id} con titulo ${title} posteada con exito`
    );
  } catch (e) {
    console.log(e.message);
  }
};

controller.getUserFeed = async (req, res) => {
  try {
    const feed = await dao.getFeedById(req.params.id);

    if (!feed) {
      console.log("Error when trying to fetch feed");
    }
    return res.send(feed);
  } catch (e) {
    console.log(e.message);
  }
};

controller.deletePost = async (req, res) => {
  try {
    const postDeleted = await dao.deletePostById(req.params.id)
    if (!postDeleted) {
      console.log("Error when trying to delete the post")
    }
    return res.send(postDeleted)
  } catch (e) {
    console.log(e.message)
  }
}
export default controller;
