import { PriorityType } from '@/db/schemas'
import { z } from 'zod'

export const addTaskZodSchema = z.object({
  idUser: z
    .string({
      required_error: 'Det oppstod et problem med å verdifisere brukeren din.',
    })
    .uuid(),
  title: z
    .string({ required_error: 'Du må skrive en tittel for oppgaven.' })
    .min(2, 'Tittelen må være minst 2 tegn lang.')
    .max(40, 'Tittelen kan ikke være lengre enn 40 tegn.')
    .trim(),
  priority: z.nativeEnum(PriorityType).default(PriorityType.Medium),
  deadline: z.date().optional(),
  description: z
    .string()
    .min(2, 'Beskrivelsen må være minst 2 tegn lang.')
    .max(200, 'Beskrivelsen kan ikke være lengre enn 200 tegn.')
    .optional(),
})

export type AddTaskZodSchema = z.infer<typeof addTaskZodSchema>
