import { prisma } from "../database/prisma";
import { TBanking, TBankingCreate, TBankingUpdate } from "../schemas/banking.schemas";

export class BankingServices {
    async create(employeeId: number ,body : TBankingCreate): Promise<TBanking> {        
      const data = await prisma.banking.create({ data: {employeeId,...body}});

      return data;
    }
  
    async findMany(): Promise<TBanking[]>{
      const data = await prisma.banking.findMany()

      return data
    }
  
    async findOne(id: number) : Promise<TBanking> {
      const data = await prisma.banking.findFirst({where: { id : id}});

      return data as TBanking;
    }
  
    async update(id: number,body: TBankingUpdate): Promise<TBanking>{
      const data = await prisma.banking.update({where: { id:id}, data: body})

      return data;
    }
  
    async delete(id: number): Promise<void> {

      await prisma.banking.delete({ where : { id: id}});
    }
  }
  