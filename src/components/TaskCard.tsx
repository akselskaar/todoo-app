'use client'

import { Task } from '@/db/schemas'
import { DotsVerticalIcon, CalendarIcon } from '@radix-ui/react-icons'
import { Button, DeadlineBadge } from '@/components'
import { getDayDateDuration } from '@/lib/utils'
import { Checkbox } from './ui/checkbox'

type TaskCardProps = {
  data: Task
  index: number
}

const TaskCard = ({ data, index }: TaskCardProps) => {
  const increment = index + 1
  return (
    <li className='border border-border rounded-md'>
      <div className='p-3 border-b border-border flex justify-between'>
        <span className='flex items-center gap-2 text-md font-bold'>
          <span>#{increment}</span>
          <h2>{data.title}</h2>
        </span>
        <Button size='icon' variant='ghost' className='size-7'>
          <DotsVerticalIcon />
        </Button>
      </div>
      <div className='p-3 flex justify-between items-end'>
        <div className='flex flex-col gap-4'>
          <p className='text-sm'>{data.description}</p>
          <DeadlineBadge
            icon={<CalendarIcon />}
            days={getDayDateDuration(data.deadline)}
          />
        </div>
        <Checkbox className='size-6'></Checkbox>
      </div>
    </li>
  )
}
export default TaskCard
