'use server'

import { db } from '@/db'
import { AddTaskZodSchema } from '@/zod/AddTaskZodSchema'
import { task, Task } from '@/db/schemas'

export const dbGetTasksByUser = async (idUser: string): Promise<Task[]> => {
  const res: Task[] = await db.query.task.findMany({
    where: (task, { eq }) => eq(task.idUser, idUser),
  })

  return res
}

export const dbInsertNewTask = async (newTask: AddTaskZodSchema) => {
  const insertedTask = await db
    .insert(task)
    .values(newTask)
    .returning({ id: task.id })
  return {
    id: insertedTask[0].id,
  }
}
