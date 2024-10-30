'use client'

import { Control, FieldValues } from 'react-hook-form'
import { FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { cn, formatDate } from '@/lib/utils'
import { CalendarIcon } from '@radix-ui/react-icons'
import { Calendar } from '../ui/calendar'

type FormDatepickerProps = {
  name: string
  label?: string
  placeholder?: string
  control: Control<FieldValues> // Pass in as: control={form.control as unknown as Control<FieldValues>}
}

const FormDatePicker = ({
  name,
  label,
  placeholder = 'placeholder',
  control,
}: FormDatepickerProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='w-full'>
          <FormLabel>{label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-full pl-3 text-left font-normal',
                    !field.value && 'text-muted-foreground'
                  )}
                >
                  {field.value ? (
                    formatDate(field.value)
                  ) : (
                    <span>{placeholder}</span>
                  )}
                  <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0' align='start'>
              <Calendar
                mode='single'
                onSelect={field.onChange}
                disabled={(date) =>
                  date > new Date() || date < new Date('1900-01-01')
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </FormItem>
      )}
    />
  )
}
export default FormDatePicker
