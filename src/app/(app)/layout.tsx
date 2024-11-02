import { AppNav } from '@/components'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppNav />
      <main className='pt-[8rem] p-6'>{children}</main>
    </>
  )
}

export default Layout
