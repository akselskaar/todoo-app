import { PriorityType } from '@/db/schemas'
import { z } from 'zod'

export const editTaskZodSchema = z.object({
  id: z
    .string({
      required_error:
        'There was an error with finding the task. Please try again.',
    })
    .uuid(),
  title: z
    .string({ required_error: 'Title is required' })
    .min(2, 'Title must be at least 2 characters long.')
    .max(40, 'Title cannot be longer than 40 characters.')
    .trim(),
  priority: z.nativeEnum(PriorityType).default(PriorityType.Medium),
  deadline: z.date().optional(),
  description: z
    .string()
    .min(2, 'The description must be at least 2 characters long.')
    .max(200, 'The description cannot be longer than 200 characters.')
    .optional(),
})

export type EditTaskZodSchema = z.infer<typeof editTaskZodSchema>
