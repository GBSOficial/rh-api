import { Router } from "express";
import { AddressControllers } from "../controllers/address.controllers";


export const addressRouter = Router();

const addressControllers = new AddressControllers();

addressRouter.post("/", addressControllers.create);
addressRouter.get("/", addressControllers.findMany);
addressRouter.get("/:id", addressControllers.findOne);
addressRouter.patch("/:id", addressControllers.update);
addressRouter.delete("/:id", addressControllers.delete);