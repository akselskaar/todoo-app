'use client'

import {
  Button,
  FormInput,
  Form,
  FormDescription,
  FormSelect,
  FormDatePicker,
} from '@/components'
import { Control, FieldValues, useForm } from 'react-hook-form'
import { useState } from 'react'
import { editTaskZodSchema, EditTaskZodSchema } from '@/zod/EditTaskZodSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { editTaskAction } from '@/actions'
import { PriorityType, Task } from '@/db/schemas'

type EditTaskFormProps = {
  task: Task
  closePopovers: () => void
}

const EditTaskForm = ({ task, closePopovers }: EditTaskFormProps) => {
  const [errorMessage, setErrorMessage] = useState('')

  const form = useForm<EditTaskZodSchema>({
    resolver: zodResolver(editTaskZodSchema),
    mode: 'onTouched',
    defaultValues: {
      id: task.id,
      title: task.title,
      description: task.description ?? undefined,
      priority: task.priority,
      deadline: task.deadline ?? undefined,
    },
  })

  const onSubmit = async (values: EditTaskZodSchema) => {
    const { success, message } = await editTaskAction(values)

    if (success) {
      closePopovers()
    }

    if (!success && message) {
      setErrorMessage(message)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <FormInput
          label='Title'
          name='title'
          placeholder=' '
          control={form.control as unknown as Control<FieldValues>}
        />

        <FormInput
          label='Description'
          name='description'
          placeholder=' '
          control={form.control as unknown as Control<FieldValues>}
        />

        <FormSelect
          label='Priority'
          name='priority'
          options={Object.entries(PriorityType).map(([key, value]) => ({
            label: key,
            value,
          }))}
          control={form.control as unknown as Control<FieldValues>}
        />

        <FormDatePicker
          label='Deadline'
          name='deadline'
          placeholder='Pick a date'
          disablePast
          control={form.control as unknown as Control<FieldValues>}
        />

        {errorMessage && <FormDescription>{errorMessage}</FormDescription>}

        <div className='flex gap-2 justify-end'>
          <Button type='button' variant='outline' onClick={closePopovers}>
            Cancel
          </Button>

          <Button type='submit'>Add task</Button>
        </div>
      </form>
    </Form>
  )
}
export default EditTaskForm
