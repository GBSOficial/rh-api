import { z } from "zod";

export const datesSchema = z.object({
    id: z.number().positive(),
    birthDate: z.string(),
    homeTraining: z.string(),
    admissionDate: z.string(),
    dismissalDate: z.string(),
    admissionExam: z.string(),
    dismissalExam: z.string(),
    safeInternshipDate: z.string(),
    contractEndDate: z.string(),
    interviewOpinion: z.string(),
    employeeId: z.number().positive(),
})

export const datesCreateSchema = datesSchema.omit({ id: true, employeeId: true });

export const datesUpdateSchema = datesCreateSchema.partial();

export type  TDatesCreate = z.infer<typeof datesCreateSchema>;

export type TDates = z.infer<typeof datesSchema>;

export type TDatesUpdate = z.infer<typeof datesUpdateSchema>;

