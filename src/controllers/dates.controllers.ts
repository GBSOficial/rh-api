import { Request, Response } from "express";
import { DatesServices } from "../services/dates.services";

export class DatesControllers {
    async create(req: Request, res: Response) {

      const datesServices = new DatesServices();

      const data = await datesServices.create(Number(req.params.id), req.body)

      return res.status(201).json(data)
        
    }
  
    async findMany(req: Request, res: Response) {
    const datesServices = new DatesServices();

      const data = await datesServices.findMany();

      return res.status(200).json(data);

    }
  
    async findOne(req: Request, res: Response) {
    const datesServices = new DatesServices();

      const data = await datesServices.findOne(Number(req.params.id))

      return res.status(200).json(data);

    }
  
    async update(req: Request, res: Response) {

    const datesServices = new DatesServices();

      const data = await datesServices.update(Number(req.params.id), req.body);

      return res.status(200).json(data)

    }
  
    async delete(req: Request, res: Response) {
      
    const datesServices = new DatesServices();

      await datesServices.delete(Number(req.params.id));

      return res.status(204).json();
    }
  }
  