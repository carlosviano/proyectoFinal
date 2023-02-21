import express from "express";
import listController from '../controller/list_controller.js'

const listRouter = express.Router();

listRouter.post('/add/:id', listController.addToList)

export default listRouter