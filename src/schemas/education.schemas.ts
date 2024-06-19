import { z } from "zod";

export const educationSchema = z.object({
    id: z.number().positive(),
    educationLevel: z.string().min(1),
    course: z.string().min(1),
    employeeId: z.number().positive()
})


export const educationCreateSchema = educationSchema.omit({ id : true , employeeId: true});


export const educationUpdateSchema = educationCreateSchema.partial();

export type  TEducationCreate = z.infer<typeof educationCreateSchema>;

export type TEducation = z.infer<typeof educationSchema>;

export type TEducationUpdate = z.infer<typeof educationUpdateSchema>;


