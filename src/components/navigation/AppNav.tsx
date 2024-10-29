import UserAvatar from './UserAvatar'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

const AppNav = async () => {
  const session = await auth()
  if (!session?.user) {
    redirect('/api/auth/signin?callbackUrl=/tasks')
  }

  return (
    <nav className='flex justify-between items-center px-6 py-4 bg-pink-200'>
      <h1>Todoo app</h1>
      <UserAvatar name={session.user.name} />
    </nav>
  )
}
export default AppNav
