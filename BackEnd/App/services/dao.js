import userQueries from "./mysql_queries/user_queries.js";
import publicationQueries from "./mysql_queries/publication_queries.js";
import listQueries from "./mysql_queries/list_queries.js";

const dao = {};

dao.getUserByEmail = async (email) => await userQueries.getUserByEmail(email);

dao.addUser = async (userData) => await userQueries.addUser(userData);

dao.updateImage = async (id, imageData) => await userQueries.updateImage(id, imageData)

dao.getUserById = async (id) => await userQueries.getUserById(id);

dao.addPublication = async (id, publicationData) => await publicationQueries.addPublication(id, publicationData)

dao.getListById = async (id) => await userQueries.getListById(id)

dao.getFeedById = async (id) => await userQueries.getFeedById(id)

dao.addToList = async (id, itemData) => await listQueries.addToList(id, itemData)

dao.getShowByName = async (id, showName) => await listQueries.getShowByName(id, showName)

dao.updateUser = async (id, userData) => await userQueries.updateUser(id, userData)

dao.updateList = async (id, listData) => await listQueries.updateList(id, listData)

dao.getUserByUsername = async (username) => await userQueries.getUserByUsername(username)

dao.getFollowsById = async (id) => await userQueries.getFollowsById(id)
export default dao;
