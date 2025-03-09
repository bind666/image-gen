import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import { Toaster } from '@/components/ui/toaster'
import { useUser } from '@clerk/nextjs'

const Layout = ({ children }: { children: React.ReactNode }) => {
  // const { isLoaded, isSignedIn } = useUser();

  // if (!isLoaded) {
  //   return <div>Loading</div>
  // }
  
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />

      <div className="root-container">
        <div className="wrapper">
          {children}
        </div>
      </div>

      <Toaster />
    </main>
  )
}

export default Layout