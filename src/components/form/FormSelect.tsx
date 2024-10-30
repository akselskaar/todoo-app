import { Control, FieldValues } from 'react-hook-form'
import { FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectOption,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

type FormSelectProps = {
  name: string
  label?: string
  placeholder?: string
  options?: SelectOption<string>[]
  control: Control<FieldValues> // Pass in as: control={form.control as unknown as Control<FieldValues>}
}

const FormSelect = ({
  name,
  label = 'Label',
  placeholder = 'Velg...',
  options,
  control,
}: FormSelectProps) => {
  return (
    <div className='w-full'>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {!options || (options.length === 0 && <p>Ingen resultater</p>)}
                {options?.map((option, i) => (
                  <SelectItem key={i} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
    </div>
  )
}
export default FormSelect
