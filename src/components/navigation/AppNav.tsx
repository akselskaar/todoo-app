'use server'

import TabBar from './TabBar'
import UserAvatar from './UserAvatar'
import { auth } from '@/auth'

const AppNav = async () => {
  const session = await auth()
  return (
    <nav className='fixed w-full bg-primary-a3 border-b border-primary-a6'>
      <div className='pt-4 backdrop-blur-lg'>
        <div className='px-6 flex justify-between items-center'>
          <h1 className='text-lg font-bold'>Todoo app</h1>
          <UserAvatar name={session?.user?.name} image={session?.user?.image} />
        </div>
        <TabBar />
      </div>
    </nav>
  )
}
export default AppNav
