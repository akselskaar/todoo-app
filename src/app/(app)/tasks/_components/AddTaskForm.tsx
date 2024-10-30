'use client'

import {
  Button,
  FormDialog,
  Form,
  FormDescription,
  FormInput,
  FormDatePicker,
  FormSelect,
} from '@/components'
import { addTaskZodSchema, AddTaskZodSchema } from '@/zod/AddTaskZodSchema'
import { useState } from 'react'
import { Control, FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { addNewTaskAction } from '@/actions/task'
import { PriorityType } from '@/db/schemas'

type AddTaskFormProps = {
  idUser: string
}

const AddTaskForm = ({ idUser }: AddTaskFormProps) => {
  const [open, setOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const form = useForm<AddTaskZodSchema>({
    resolver: zodResolver(addTaskZodSchema),
    mode: 'onBlur',
    defaultValues: {
      idUser,
      title: '',
      description: '',
    },
  })

  const onSubmit = async (values: AddTaskZodSchema) => {
    console.log('values: ', values)
    const { success, message } = await addNewTaskAction(values)

    if (success) {
      setOpen(false)
      form.reset()
    }

    if (!success && message) {
      setErrorMessage(message)
    }
  }

  return (
    <FormDialog
      buttonText='Add new task'
      buttonVariant='default'
      title='Add new task'
      description='Enter the name of the task you want to add'
      open={open}
      setOpen={setOpen}
    >
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
            disablePast
            control={form.control as unknown as Control<FieldValues>}
          />

          {errorMessage && <FormDescription>{errorMessage}</FormDescription>}

          <div className='flex gap-2 justify-end'>
            <Button
              type='button'
              variant='outline'
              onClick={() => setOpen(false)}
            >
              Avbryt
            </Button>

            <Button type='submit'>Lagre</Button>
          </div>
        </form>
      </Form>
    </FormDialog>
  )
}
export default AddTaskForm
