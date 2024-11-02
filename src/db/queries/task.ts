'use server'

import { db } from '@/db'
import { AddTaskZodSchema } from '@/zod/AddTaskZodSchema'
import { task, Task } from '@/db/schemas'
import { eq, and, asc } from 'drizzle-orm'
import { EditTaskZodSchema } from '@/zod/EditTaskZodSchema'

export const dbGetUncompletedTasksByUser = async (
  idUser: string
): Promise<Task[]> => {
  const res: Task[] = await db
    .select()
    .from(task)
    .where(and(eq(task.idUser, idUser), eq(task.isCompleted, false)))
    .orderBy(asc(task.deadline))

  return res
}

export const dbGetCompletedTasksByUser = async (
  idUser: string
): Promise<Task[]> => {
  const res: Task[] = await db
    .select()
    .from(task)
    .where(and(eq(task.idUser, idUser), eq(task.isCompleted, true)))
    .orderBy(asc(task.deadline))

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

export const dbEditTask = async (editedTask: EditTaskZodSchema) => {
  const res = await db
    .update(task)
    .set(editedTask)
    .where(eq(task.id, editedTask.id))
    .returning({ id: task.id })

  return {
    id: res[0].id,
  }
}

export const dbDeleteTask = async (id: string) => {
  const res = await db
    .delete(task)
    .where(eq(task.id, id))
    .returning({ id: task.id })

  return {
    id: res[0].id,
  }
}
