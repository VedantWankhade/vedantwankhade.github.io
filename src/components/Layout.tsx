import { ReactNode } from "react"
import Navbar from "./navbar/Navbar"

interface LayoutProps {
    children: ReactNode
}  

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="ctp-mocha">
    <header className="bg-ctp-mantle text-ctp-text">
      <Navbar />
    </header>
    <main className="bg-ctp-mantle text-ctp-text">
      { children }
    </main>
    <footer className="bg-ctp-mantle text-ctp-text">
      <p>Footer</p>
    </footer>
  </div>
)
  
export default Layout