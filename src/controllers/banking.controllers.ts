import { Request, Response } from "express";
import { BankingServices } from "../services/banking.services";

export class BankingControllers {
    async create(req: Request, res: Response) {

     const bankingServices = new BankingServices();

      const data = await bankingServices.create(Number(req.params.id), req.body)

      return res.status(201).json(data)
        
    }
  
    async findMany(req: Request, res: Response) {
        const bankingServices = new BankingServices();

      const data = await bankingServices.findMany();

      return res.status(200).json(data);

    }
  
    async findOne(req: Request, res: Response) {
        const bankingServices = new BankingServices();

      const data = await bankingServices.findOne(Number(req.params.id))

      return res.status(200).json(data);

    }
  
    async update(req: Request, res: Response) {

    const bankingServices = new BankingServices();

      const data = await bankingServices.update(Number(req.params.id), req.body);

      return res.status(200).json(data)

    }
  
    async delete(req: Request, res: Response) {
      
    const bankingServices = new BankingServices();

      await bankingServices.delete(Number(req.params.id));

      return res.status(204).json();
    }
  }
  