import { jwtVerify, SignJWT } from "jose";
import { currentDir } from "../index.js";
import md5 from "md5";
import dao from "../services/dao.js";

const __dirname = currentDir().__dirname

const controller = {};

controller.addUser = async (req, res) => {
  const {email, password, name, surname, username } = req.body;

  if (!email || !password || !name || !surname || !username)
    return res.status(400).send("Error al recibir el body");

  try {
    const user = await dao.getUserByEmail(email);

    if (user.length > 0) return res.status(409).send("usuario ya registrado");

    const addUser = await dao.addUser(req.body);
    if (addUser)
      return res.send(`Usuario ${email} con id: ${addUser} registrado`);
  } catch (e) {
    console.log(e.message);
  }
};

controller.loginUser = async (req,res) => {  const { email, password } = req.body;

if (!email || !password)
  return res.status(400).send("Error al recibir el body");

try {
  let user = await dao.getUserByEmail(email);
  if (user.length <= 0) return res.status(404).send("usuario no registrado");
  const clientPassword = md5(password);
  console.log(user);

  const [newUser] = user;

  if (newUser.password !== clientPassword)
    return res.status(401).send("Password incorrecta");

  const jwtConstructor = new SignJWT({
    id: newUser.id,
    email,
    role: newUser.role,
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


controller.updateImage = async(req,res) => {
  const {authorization} = req.headers

  if(!authorization) return res.sendStatus(401);

  try {
    
    if (req.files === null) return;

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No se ha cargado ningun archivo");
    }

    if (!req.query) {
      return res.status(400).send("No se ha indicado el id del producto");
    }

    const images = !req.files.imagen.length
      ? [req.files.imagen]
      : req.files.imagen;
    images.forEach(async (image) => {
      let uploadPath = __dirname + "/public/images/products/" + image.name;
      let BBDDPath = "images/products/" + image.name;
      image.mv(uploadPath, (err) => {
        if (err) return res.status(500).send(err);
      });
      
    await dao.updateImage(req.params.id,{
      img: BBDDPath,
    })
    });


    return res.send(`Usuario con id ${req.params.id} actualizado`)

  } catch(e) {
    console.log(e.message)
  }
}

controller.getUserById = async (req,res) => {
  try {
    console.log(req.params.id);
    const product = await dao.getUserById(req.params.id);
    return res.status(200).send(product);
  } catch (e) {
    console.log(e.message);
  }
}
export default controller;
