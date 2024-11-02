'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const TabBar = () => {
  const pathname = usePathname()

  return (
    <nav className='px-6'>
      <ul className='flex items-center'>
        <li
          className={`p-2 ${
            pathname === '/tasks' ? 'border-b-2 border-primary-10' : ''
          }`}
        >
          <span className='hover:bg-gray-a3 py-1 px-3 rounded-sm'>
            <Link href='/tasks'>Tasks</Link>
          </span>
        </li>

        <li
          className={`p-2 ${
            pathname === '/history' ? 'border-b-2 border-primary-10' : ''
          }`}
        >
          <span className='hover:bg-gray-a3 py-1 px-3 rounded-sm'>
            <Link href='/history'>History</Link>
          </span>
        </li>
      </ul>
    </nav>
  )
}
export default TabBar
