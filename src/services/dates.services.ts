import { prisma } from "../database/prisma";
import { TDates, TDatesCreate, TDatesUpdate } from "../schemas/dates.schemas";

export class DatesServices {
    async create(employeeId: number ,body : TDatesCreate): Promise<TDates> {        
      const data = await prisma.dates.create({ data: {employeeId,...body}});

      return data;
    }
  
    async findMany(): Promise<TDates[]>{
      const data = await prisma.dates.findMany()

      return data
    }
  
    async findOne(id: number) : Promise<TDates> {
      const data = await prisma.dates.findFirst({where: { id : id}});

      return data as TDates;
    }
  
    async update(id: number,body: TDatesUpdate): Promise<TDates>{
      const data = await prisma.dates.update({where: { id:id}, data: body})

      return data;
    }
  
    async delete(id: number): Promise<void> {

      await prisma.dates.delete({ where : { id: id}});
    }
  }
  