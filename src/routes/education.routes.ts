import { Router } from "express";
import { EducationControllers } from "../controllers/education.controllers";



export const educationRouter = Router();

const educationControllers = new EducationControllers();

educationRouter.post("/", educationControllers.create);
educationRouter.get("/", educationControllers.findMany);
educationRouter.get("/:id", educationControllers.findOne);
educationRouter.patch("/:id", educationControllers.update);
educationRouter.delete("/:id", educationControllers.delete);