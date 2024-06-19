import { Router } from "express";
import { UserControllers } from "../controllers/user.controllers";
import { ValidateBody } from "../middlewares/validateBody.middlewares";
import { userLoginBodySchema, userRegisterBodySchema } from "../schemas/user.schemas";
import { ValidateToken } from "../middlewares/validateToken.middlewares";

export const userRouter = Router();

const userControllers = new UserControllers();

userRouter.post("/",ValidateBody.execute(userRegisterBodySchema),userControllers.register);
userRouter.post("/login",ValidateBody.execute(userLoginBodySchema),userControllers.login);
userRouter.get("/:id", ValidateToken.execute ,userControllers.getUser);
userRouter.patch("/:id", ValidateToken.execute ,userControllers.update)
userRouter.delete("/:id", userControllers.delete)
