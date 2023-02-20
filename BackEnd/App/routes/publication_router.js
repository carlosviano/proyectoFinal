import express from "express";
import publicationController from "../controller/publication_controller.js";

const publicationRouter = express.Router();

publicationRouter.post('/:id',publicationController.addPublication)

publicationRouter.get('/feed/:id',publicationController.getUserFeed)

export default publicationRouter;
