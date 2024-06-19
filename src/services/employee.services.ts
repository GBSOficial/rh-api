import { prisma } from "../database/prisma";
import { TEmployee, TEmployeeCreate, TEmployeeUpdate } from "../schemas/employee.schemas";

export class EmployeeServices {
    async create(userId: number ,body : TEmployeeCreate): Promise<TEmployee> {        
      const data = await prisma.employee.create({ data: {userId,...body}});

      return data;
    }
  
    async findMany(): Promise<TEmployee[]>{
      const data = await prisma.employee.findMany()

      return data
    }
  
    async findOne(id: number) : Promise<TEmployee> {
      const data = await prisma.employee.findFirst({where: { id : id}});

      return data as TEmployee;
    }
  
    async update(id: number,body: TEmployeeUpdate): Promise<TEmployee>{
      const data = await prisma.employee.update({where: { id:id}, data: body})

      return data;
    }
  
    async delete(id: number): Promise<void> {

      await prisma.employee.delete({ where : { id: id}});
    }
  }
  