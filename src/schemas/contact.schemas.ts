import { z } from "zod";

export const contactSchema = z.object({
    id: z.number().positive(),
    telePhone: z.string(),
    cellPhone: z.string(),
    email: z.string(),
    employeeId: z.number().positive(),
})

export const contactCreateSchema = contactSchema.omit({ id: true, employeeId: true });

export const contactUpdateSchema = contactCreateSchema.partial();

export type  TContactCreate = z.infer<typeof contactCreateSchema>;

export type TContact = z.infer<typeof contactSchema>;

export type TContactUpdate = z.infer<typeof contactUpdateSchema>;

