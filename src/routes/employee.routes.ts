import { Router } from "express";
import { EmployeeControllers } from "../controllers/employee.controllers";


export const employeeRouter = Router();

const employeeControllers = new EmployeeControllers();

employeeRouter.post("/", employeeControllers.create);
employeeRouter.get("/", employeeControllers.findMany);
employeeRouter.get("/:id", employeeControllers.findOne);
employeeRouter.patch("/:id", employeeControllers.update);
employeeRouter.delete("/:id", employeeControllers.delete);