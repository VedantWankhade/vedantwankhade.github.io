import { ReactNode } from "react"
import Navbar from "./navbar/Navbar"

interface LayoutProps {
    children: ReactNode
}  

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <header>
      <Navbar />
    </header>
    <main>
      { children }
    </main>
    <footer>
      <p>Footer</p>
    </footer>
  </>
)
  
export default Layout