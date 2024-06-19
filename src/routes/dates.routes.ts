import { Router } from "express";
import { DatesControllers } from "../controllers/dates.controllers";


export const datesRouter = Router();

const datesControllers = new DatesControllers();

datesRouter.post("/", datesControllers.create);
datesRouter.get("/", datesControllers.findMany);
datesRouter.get("/:id", datesControllers.findOne);
datesRouter.patch("/:id", datesControllers.update);
datesRouter.delete("/:id", datesControllers.delete);