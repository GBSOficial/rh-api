import { Request, Response } from "express";
import { AddressServices } from "../services/address.services";

export class AddressControllers {
    async create(req: Request, res: Response) {

     const addressServices = new AddressServices();

      const data = await addressServices.create(Number(req.params.id), req.body)

      return res.status(201).json(data)
        
    }
  
    async findMany(req: Request, res: Response) {
        const addressServices = new AddressServices();

      const data = await addressServices.findMany();

      return res.status(200).json(data);

    }
  
    async findOne(req: Request, res: Response) {
        const addressServices = new AddressServices();

      const data = await addressServices.findOne(Number(req.params.id))

      return res.status(200).json(data);

    }
  
    async update(req: Request, res: Response) {

        const addressServices = new AddressServices();

      const data = await addressServices.update(Number(req.params.id), req.body);

      return res.status(200).json(data)

    }
  
    async delete(req: Request, res: Response) {
      
        const addressServices = new AddressServices();

      await addressServices.delete(Number(req.params.id));

      return res.status(204).json();
    }
  }
  