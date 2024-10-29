import { Button } from '@/components'
import Link from 'next/link'

const HomePage = async () => {
  return (
    <main className='p-6'>
      <header className='space-y-4'>
        <h1 className='text-2xl font-bold'>
          Get control over your tasks today
        </h1>
        <p className='text-gray-700'>
          Use this amazing app to get control over your life. It will make your
          life much better.
        </p>
        <Link href='/api/auth/signin?callbackUrl=/tasks'>
          <Button className='w-full'>Registrer</Button>
        </Link>
      </header>
    </main>
  )
}
export default HomePage
