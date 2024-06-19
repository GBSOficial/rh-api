import { z } from "zod";

export const bankingSchema = z.object({
    id: z.number().positive(),
    bank: z.string(),
    agency: z.string(),
    account: z.string(),
    accountType: z.string(),
    employeeId: z.number().positive(),
})

export const bankingCreateSchema = bankingSchema.omit({ id: true, employeeId: true });

export const bankingUpdateSchema = bankingCreateSchema.partial();

export type  TBankingCreate = z.infer<typeof bankingCreateSchema>;

export type TBanking = z.infer<typeof bankingSchema>;

export type TBankingUpdate = z.infer<typeof bankingUpdateSchema>;

