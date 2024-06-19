import { Request, Response, json, response } from "express";
import { UserServices } from "../services/user.services";

export class UserControllers {
  async register(req: Request, res: Response): Promise<Response> {
    const userServices = new UserServices();

    const data = await userServices.register(req.body);

    return res.status(201).json(data);
  }

  async login(req: Request, res: Response): Promise<Response> {
    const userServices = new UserServices();

    const data = await userServices.login(req.body);

    return res.status(200).json(data);
  }

  async findMany(req: Request, res: Response) {
    const userServices = new UserServices();


    const data = await userServices.findMany();

    return res.status(200).json(data);

  }

  async getUser(req: Request, res: Response): Promise<Response> {
    const userServices = new UserServices();

    const id = res.locals.decode.id;

    const data = await userServices.getUser(id);

    return res.status(200).json(data);
  }

  async update(req: Request, res: Response){
    const userServices = new UserServices();

    const data = await userServices.update(Number(req.params.id), req.body);

    return res.status(200).json(data)
  }

  async delete(req: Request, res: Response){
    const userServices = new UserServices();

    await userServices.delete(Number(req.params.id));

    return res.status(204).json();
  }
}
