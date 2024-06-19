import { prisma } from "../database/prisma";
import { TContact, TContactCreate, TContactUpdate } from "../schemas/contact.schemas";

export class ContactServices {
    async create(employeeId: number ,body : TContactCreate): Promise<TContact> {        
      const data = await prisma.contact.create({ data: {employeeId,...body}});

      return data;
    }
  
    async findMany(): Promise<TContact[]>{
      const data = await prisma.contact.findMany()

      return data
    }
  
    async findOne(id: number) : Promise<TContact> {
      const data = await prisma.contact.findFirst({where: { id : id}});

      return data as TContact;
    }
  
    async update(id: number,body: TContactUpdate): Promise<TContact>{
      const data = await prisma.contact.update({where: { id:id}, data: body})

      return data;
    }
  
    async delete(id: number): Promise<void> {

      await prisma.contact.delete({ where : { id: id}});
    }
  }
  