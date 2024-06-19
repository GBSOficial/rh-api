import { Router } from "express";
import { ContactControllers } from "../controllers/contact.controllers";


export const contactRouter = Router();

const contactControllers = new ContactControllers();

contactRouter.post("/", contactControllers.create);
contactRouter.get("/", contactControllers.findMany);
contactRouter.get("/:id", contactControllers.findOne);
contactRouter.patch("/:id", contactControllers.update);
contactRouter.delete("/:id", contactControllers.delete);