'use client'

import Link from 'next/link'
import { buttonVariants } from '../ui/button'

const WebsiteNav = () => {
  return (
    <nav className='flex justify-between items-center px-6 py-4 bg-red-200'>
      <h1 className='font-bold text-lg'>Todoo app</h1>
      <Link
        href='/api/auth/signin?callbackUrl=/tasks'
        className={buttonVariants({ variant: 'default' })}
      >
        Logg inn
      </Link>
    </nav>
  )
}
export default WebsiteNav
