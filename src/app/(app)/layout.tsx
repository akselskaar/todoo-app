import { AppNav } from '@/components'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppNav />
      {children}
    </>
  )
}

export default Layout
