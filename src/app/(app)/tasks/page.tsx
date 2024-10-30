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
    <main className='p-6'>
      <header className='flex justify-between items-center mb-4'>
        <h1 className='text-lg font-bold'>Your tasks</h1>
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
    </main>
  )
}
export default TasksPage
