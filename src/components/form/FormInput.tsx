import { Control, FieldValues } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'

type InputProps = {
  type?: 'text' | 'number'
  name: string
  lable?: string
  placeholder?: string
  control: Control<FieldValues> // Pass in as: control={form.control as unknown as Control<FieldValues>}
}

const FormInput = ({
  type = 'text',
  name,
  lable,
  placeholder = 'placeholder',
  control,
}: InputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='w-full'>
          {lable && <FormLabel>{lable}</FormLabel>}
          <FormControl>
            {type === 'number' ? (
              <Input
                placeholder={placeholder}
                {...field}
                type='number'
                onChange={(event) => field.onChange(+event.target.value)}
              />
            ) : (
              <Input placeholder={placeholder} {...field} />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
export default FormInput
