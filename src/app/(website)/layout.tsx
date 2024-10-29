import { WebsiteNav } from '@/components'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <WebsiteNav />
      {children}
    </>
  )
}

export default Layout
