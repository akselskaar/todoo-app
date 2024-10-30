'use server'

import { AddTaskZodSchema, addTaskZodSchema } from '@/zod/AddTaskZodSchema'
import { revalidatePath } from 'next/cache'
import { dbGetTasksByUser, dbInsertNewTask } from '@/db/queries'
import { task, Task } from '@/db/schemas'
import { db } from '@/db'
import { eq } from 'drizzle-orm'

export const getTasksByUserAction = async (idUser: string): Promise<Task[]> => {
  try {
    const res = await dbGetTasksByUser(idUser)
    return res
  } catch (error) {
    console.error(
      'An error occurred on the server while trying to get tasks by user: ',
      error
    )
    return []
  }
}

export const addNewTaskAction = async (
  values: AddTaskZodSchema
): Promise<APResponse> => {
  const validated = addTaskZodSchema.parse(values)

  try {
    const res = await dbInsertNewTask(validated)
    revalidatePath('/tasks')
    return {
      success: true,
      message: 'The task was added successfully',
      id: res.id,
    }
  } catch (error) {
    console.error(
      'An error occurred on the server while trying to add a new task: ',
      error
    )
    return {
      success: false,
      message:
        'An error occurred on the server while trying to add a new task.',
    }
  }
}

export const toggleTaskCompleted = async (id: string) => {
  const taskToUpdate = await db.query.task.findFirst({
    where: (task, { eq }) => eq(task.id, id),
  })

  const updated = await db
    .update(task)
    .set({ isCompleted: !taskToUpdate!.isCompleted })
    .where(eq(task.id, id))

  return updated
}
