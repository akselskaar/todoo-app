'use client'

import { Button } from '@/components'
import Link from 'next/link'

const WebsiteNav = () => {
  return (
    <nav className='flex justify-between items-center px-6 py-4 bg-red-200'>
      <h1 className='font-bold text-lg'>Todoo app</h1>
      <Link href='/api/auth/signin?callbackUrl=/tasks'>
        <Button>Logg inn</Button>
      </Link>
    </nav>
  )
}
export default WebsiteNav
