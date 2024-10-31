import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import AddTaskForm from './_components/AddTaskForm'
import { getTasksByUserAction } from '@/actions'
import { TaskCard } from '@/components'

const TasksPage = async () => {
  const session = await auth()

  if (!session?.user) {
    redirect('/api/auth/signin?callbackUrl=/tasks')
  }

  const data = await getTasksByUserAction(session.user.id!)
  return (
    <>
      <header className='flex justify-between items-center mb-6'>
        <h1 className='text-2xl font-bold'>Your tasks</h1>
        <AddTaskForm idUser={session.user.id!} />
      </header>
      <section>
        {data.length > 0 ? (
          <ul className='space-y-2'>
            {data.map((task, i) => (
              <TaskCard key={task.id} index={i} data={task} />
            ))}
          </ul>
        ) : (
          <p>You have no tasks</p>
        )}
      </section>
    </>
  )
}
export default TasksPage
