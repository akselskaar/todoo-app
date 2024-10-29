import { Button } from '@/components'

const page = () => {
  return (
    <main className='p-6'>
      <header className='flex justify-between items-center'>
        <h1 className='text-lg font-bold'>Your tasks</h1>
        <Button size='sm' variant='outline'>
          Add new task
        </Button>
      </header>
      <section>
        <ul>
          <li>
            <span>Task 1</span>
            <input type='checkbox' />
          </li>
          <li>
            <span>Task 2</span>
            <input type='checkbox' />
          </li>
          <li>
            <span>Task 3</span>
            <input type='checkbox' />
          </li>
        </ul>
      </section>
    </main>
  )
}
export default page
