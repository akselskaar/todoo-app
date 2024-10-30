'use client'

import { Button, FormDialog } from '@/components'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { addTaskZodSchema, AddTaskZodSchema } from '@/zod/AddTaskZodSchema'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { addNewTaskAction } from '@/actions/task'

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
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder='Title' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder='Desctription..' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
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
