import { Request, Response } from "express";
import { EmployeeServices } from "../services/employee.services";

export class EmployeeControllers {
    async create(req: Request, res: Response) {

      const employeeServices = new EmployeeServices();

      const data = await employeeServices.create(Number(req.params.id), req.body)

      return res.status(201).json(data)
        
    }
  
    async findMany(req: Request, res: Response) {
      const employeeServices = new EmployeeServices();

      const data = await employeeServices.findMany();

      return res.status(200).json(data);

    }
  
    async findOne(req: Request, res: Response) {
      const employeeServices = new EmployeeServices();

      const data = await employeeServices.findOne(Number(req.params.id))

      return res.status(200).json(data);

    }
  
    async update(req: Request, res: Response) {

      const employeeServices = new EmployeeServices();

      const data = await employeeServices.update(Number(req.params.id), req.body);

      return res.status(200).json(data)

    }
  
    async delete(req: Request, res: Response) {
      
      const employeeServices = new EmployeeServices();

      await employeeServices.delete(Number(req.params.id));

      return res.status(204).json();
    }
  }
  