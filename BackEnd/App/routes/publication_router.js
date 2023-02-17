import express from "express";
import publicationController from "../controller/publication_controller.js";

const publicationRouter = express.Router();

publicationRouter.post('/:id',publicationController.addPublication)

export default publicationRouter;
