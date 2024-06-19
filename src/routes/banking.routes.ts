import { Router } from "express";
import { BankingControllers } from "../controllers/banking.controllers";


export const bankingRouter = Router();

const bankingControllers = new BankingControllers();

bankingRouter.post("/", bankingControllers.create);
bankingRouter.get("/", bankingControllers.findMany);
bankingRouter.get("/:id", bankingControllers.findOne);
bankingRouter.patch("/:id", bankingControllers.update);
bankingRouter.delete("/:id", bankingControllers.delete);