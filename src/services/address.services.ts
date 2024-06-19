import { prisma } from "../database/prisma";
import { TAddress, TAddressCreate, TAddressUpdate } from "../schemas/address.schemas";

export class AddressServices {
    async create(employeeId: number ,body : TAddressCreate): Promise<TAddress> {        
      const data = await prisma.address.create({ data: {employeeId,...body}});

      return data;
    }
  
    async findMany(): Promise<TAddress[]>{
      const data = await prisma.address.findMany()

      return data
    }
  
    async findOne(id: number) : Promise<TAddress> {
      const data = await prisma.address.findFirst({where: { id : id}});

      return data as TAddress;
    }
  
    async update(id: number,body: TAddressUpdate): Promise<TAddress>{
      const data = await prisma.address.update({where: { id:id}, data: body})

      return data;
    }
  
    async delete(id: number): Promise<void> {

      await prisma.address.delete({ where : { id: id}});
    }
  }
  