import express from "express";
import userController from "../controller/user_controller.js";
import validateLoginDto from "../utils/validate_login_dto.js";

const userRouter = express.Router();

userRouter.post("/", userController.addUser);

userRouter.get("/get/:id", userController.getUserById);

userRouter.post("/login", validateLoginDto, userController.loginUser);

userRouter.patch("/update/image/:id", userController.updateImage);

userRouter.patch("/update/info/:id", userController.updateProfile);

userRouter.post("/browse", userController.getUserByUsername);

userRouter.get("/follows/:id", userController.getFollows);

userRouter.delete("/unfollow/:id", userController.unfollowUserById);

userRouter.post("/startFollow/:id", userController.followUser);

userRouter.get("/countFollows/:id", userController.countFollows);

userRouter.post("/recent/user/:id", userController.addRecentUser);

userRouter.post('/recent/show/:id', userController.addRecentShow)

userRouter.get('/getRecentUser/:id', userController.getRecentUsers)

userRouter.get('/getRecentShows/:id', userController.getRecentShows)

userRouter.delete('/recentUsers/:id', userController.deleteUserHistory)

userRouter.delete('/shows/:id', userController.deleteShowsHistory)

export default userRouter;
