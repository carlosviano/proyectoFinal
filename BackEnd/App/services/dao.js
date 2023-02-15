import userQueries from "./mysql_queries/user_queries.js";
import productQueries from "./mysql_queries/product_queries.js";

const dao = {};

dao.getUserByEmail = async (email) => await userQueries.getUserByEmail(email);

dao.addUser = async (userData) => await userQueries.addUser(userData);

dao.updateImage = async(id, imageData) => await userQueries.updateImage(id,imageData)

dao.getUserById = async (id) => await userQueries.getUserById(id);
export default dao;
