import { z } from "zod";

export const employeeSchema = z.object({
    id: z.number().positive(),
    name: z.string().min(1),
    cpf: z.string().min(11),
    rg: z.string().min(11),
    pis: z.string().min(11),
    departament: z.string().min(1),
    contract: z.string().min(1),
    wage: z.string().min(1),
    status: z.boolean(),
    vouchers_transportation: z.boolean(),
    salary_advance : z.boolean(),
    userId: z.number().positive()
})


export const employeeCreateSchema = employeeSchema.omit({ id : true , userId: true});


export const employeeUpdateSchema = employeeCreateSchema.partial();

export type  TEmployeeCreate = z.infer<typeof employeeCreateSchema>;

export type TEmployee = z.infer<typeof employeeSchema>;

export type TEmployeeUpdate = z.infer<typeof employeeUpdateSchema>;


