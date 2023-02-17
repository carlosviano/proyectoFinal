import express from "express";
import userController from "../controller/user_controller.js"
import validateLoginDto from "../utils/validate_login_dto.js";

const userRouter = express.Router();

userRouter.post('/', userController.addUser)

userRouter.get('/get/:id',userController.getUserById)

userRouter.post('/login',validateLoginDto,userController.loginUser)

userRouter.patch('/update/:id',userController.updateImage)


export default userRouter