import { prisma } from "../database/prisma";
import { TEducation, TEducationCreate, TEducationUpdate } from "../schemas/education.schemas";

export class EducationServices {
    async create(employeeId: number ,body : TEducationCreate): Promise<TEducation> {        
      const data = await prisma.education.create({ data: {employeeId,...body}});

      return data;
    }
  
    async findMany(): Promise<TEducation[]>{
      const data = await prisma.education.findMany()

      return data
    }
  
    async findOne(id: number) : Promise<TEducation> {
      const data = await prisma.education.findFirst({where: { id : id}});

      return data as TEducation;
    }
  
    async update(id: number,body: TEducationUpdate): Promise<TEducation>{
      const data = await prisma.education.update({where: { id:id}, data: body})

      return data;
    }
  
    async delete(id: number): Promise<void> {

      await prisma.education.delete({ where : { id: id}});
    }
  }
  