'use server'

import UserAvatar from './UserAvatar'
import { auth } from '@/auth'

const AppNav = async () => {
  const session = await auth()
  console.log('session: ', session)
  return (
    <nav className='flex justify-between items-center px-6 py-4 bg-primary-a3 border-b border-primary-a6'>
      <h1 className='text-lg font-bold'>Todoo app</h1>
      <UserAvatar name={session?.user?.name} image={session?.user?.image} />
    </nav>
  )
}
export default AppNav
