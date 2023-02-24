import express from "express";
import listController from '../controller/list_controller.js'

const listRouter = express.Router();

listRouter.post('/add/:id', listController.addToList)

listRouter.patch('/update/:id', listController.updateList)

listRouter.delete('/remove/:id', listController.removeShow)
export default listRouter