import { Request, Response } from "express";
import { EducationServices } from "../services/education.services";

export class EducationControllers {
  async create(req: Request, res: Response) {
    const educationServices = new EducationServices();

    const data = await educationServices.create(
      Number(req.params.id),
      req.body
    );

    return res.status(201).json(data);
  }

  async findMany(req: Request, res: Response) {
    const educationServices = new EducationServices();

    const data = await educationServices.findMany();

    return res.status(200).json(data);
  }

  async findOne(req: Request, res: Response) {
    const educationServices = new EducationServices();

    const data = await educationServices.findOne(Number(req.params.id));

    return res.status(200).json(data);
  }

  async update(req: Request, res: Response) {
    const educationServices = new EducationServices();

    const data = await educationServices.update(
      Number(req.params.id),
      req.body
    );

    return res.status(200).json(data);
  }

  async delete(req: Request, res: Response) {
    const educationServices = new EducationServices();

    await educationServices.delete(Number(req.params.id));

    return res.status(204).json();
  }
}
