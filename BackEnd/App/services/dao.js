import userQueries from "./mysql_queries/user_queries.js";
import publicationQueries from "./mysql_queries/publication_queries.js";

const dao = {};

dao.getUserByEmail = async (email) => await userQueries.getUserByEmail(email);

dao.addUser = async (userData) => await userQueries.addUser(userData);

dao.updateImage = async(id, imageData) => await userQueries.updateImage(id,imageData)

dao.getUserById = async (id) => await userQueries.getUserById(id);

dao.addPublication = async(id,publicationData) => await publicationQueries.addPublication(id, publicationData)

dao.getListById = async(id) => await userQueries.getListById(id)

export default dao;
