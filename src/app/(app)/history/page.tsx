import { auth } from '@/auth'
import { getCompletedTasksByUserAction } from '@/actions'
import { redirect } from 'next/navigation'
import TableContainer from './_components/TableContainer'

const page = async () => {
  const session = await auth()

  if (!session?.user) {
    redirect('/api/auth/signin?callbackUrl=/tasks')
  }

  const data = await getCompletedTasksByUserAction(session.user.id!)
  return (
    <>
      <header className='flex justify-between items-center mb-6 min-h-9'>
        <h1 className='text-2xl font-bold'>History</h1>
      </header>
      <section>
        <TableContainer data={data} />
      </section>
    </>
  )
}
export default page
