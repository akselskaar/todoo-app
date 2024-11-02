'use client'

import { Task } from '@/db/schemas'
import { DotsVerticalIcon, CalendarIcon } from '@radix-ui/react-icons'
import { Button, DeadlineBadge } from '@/components'
import { Checkbox } from './ui/checkbox'
import { useState } from 'react'
import { deleteTaskAction, toggleTaskCompleted } from '@/actions'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import EditTaskForm from '@/app/(app)/tasks/_components/EditTaskForm'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

type TaskCardProps = {
  data: Task
  index: number
}

const TaskCard = ({ data, index }: TaskCardProps) => {
  const [openDropdown, setOpenDropdown] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)
  const [isCompleted, setIsCompleted] = useState(data.isCompleted)

  const increment = index + 1

  const onCheck = () => {
    setIsCompleted(!isCompleted)
    toggleTaskCompleted(data.id)
  }

  const closePopovers = () => {
    setOpenDropdown(false)
    setOpenEdit(false)
    setOpenDelete(false)
  }

  const deleteTask = async (id: string) => {
    const { success } = await deleteTaskAction(id)

    if (success) {
      closePopovers()
    }
  }

  return (
    <li className='border border-border rounded-md bg-panel'>
      <div className='p-3 border-b border-border flex justify-between'>
        <span className='flex items-center gap-2 text-md font-bold'>
          <span>#{increment}</span>
          <h2 className='capitalize-first'>{data.title}</h2>
        </span>
        <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
          <DropdownMenuTrigger asChild>
            <Button size='icon' variant='ghost' className='size-7'>
              <DotsVerticalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            {/* Edit task  */}
            <Dialog open={openEdit} onOpenChange={setOpenEdit}>
              <DialogTrigger className='w-full'>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  Edit task
                </DropdownMenuItem>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className='text-left'>Edit task</DialogTitle>
                </DialogHeader>
                <EditTaskForm task={data} closePopovers={closePopovers} />
              </DialogContent>
            </Dialog>

            {/* Slett  */}
            <Dialog open={openDelete} onOpenChange={setOpenDelete}>
              <DialogTrigger className='w-full'>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  Delete task
                </DropdownMenuItem>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className='text-left'>
                    Are you sure you wat to delete the task?
                  </DialogTitle>
                  <DialogDescription className='text-left'>
                    Are you sure you want to delete the task? This cant be
                    reverersed.
                  </DialogDescription>
                  <div className='flex gap-2 justify-end pt-6'>
                    <Button variant='outline' onClick={closePopovers}>
                      Avbryt
                    </Button>

                    <Button
                      onClick={() => deleteTask(data.id)}
                      variant='destructive'
                    >
                      Slett
                    </Button>
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className='p-3 flex justify-between items-end'>
        <div className='flex flex-col gap-4'>
          <p className='text-sm'>{data.description}</p>
          <DeadlineBadge icon={<CalendarIcon />} deadline={data.deadline} />
        </div>
        <Checkbox
          className='size-6'
          checked={isCompleted}
          onCheckedChange={onCheck}
        ></Checkbox>
      </div>
    </li>
  )
}
export default TaskCard
