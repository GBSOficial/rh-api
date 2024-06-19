import { z } from "zod";

export const addressSchema = z.object({
    id: z.number().positive(),
    country: z.string(),
    city: z.string(),
    neighborhood: z.string(),
    road: z.string(),
    zipCode: z.string(),
    employeeId: z.number().positive(),
})

export const addressCreateSchema = addressSchema.omit({ id: true, employeeId: true });

export const addressUpdateSchema = addressCreateSchema.partial();

export type  TAddressCreate = z.infer<typeof addressCreateSchema>;

export type TAddress = z.infer<typeof addressSchema>;

export type TAddressUpdate = z.infer<typeof addressUpdateSchema>;

