import { Request, Response } from "express";
import { ContactServices } from "../services/contact.services";

export class ContactControllers {
    async create(req: Request, res: Response) {

     const contactServices = new ContactServices();

      const data = await contactServices.create(Number(req.params.id), req.body)

      return res.status(201).json(data)
        
    }
  
    async findMany(req: Request, res: Response) {
    const contactServices = new ContactServices();

      const data = await contactServices.findMany();

      return res.status(200).json(data);

    }
  
    async findOne(req: Request, res: Response) {
    const contactServices = new ContactServices();

      const data = await contactServices.findOne(Number(req.params.id))

      return res.status(200).json(data);

    }
  
    async update(req: Request, res: Response) {

    const contactServices = new ContactServices();

      const data = await contactServices.update(Number(req.params.id), req.body);

      return res.status(200).json(data)

    }
  
    async delete(req: Request, res: Response) {
      
    const contactServices = new ContactServices();

      await contactServices.delete(Number(req.params.id));

      return res.status(204).json();
    }
  }
  