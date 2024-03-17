import { ReactNode, useState } from "react"
import Navbar from "./navbar/Navbar"

interface LayoutProps {
    children: ReactNode
}

enum Theme {
  DARK = "ctp-mocha",
  LIGHT = "ctp-latte"
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [theme, setTheme] = useState(Theme.DARK);
  
  return <div className={`min-h-screen bg-ctp-base text-ctp-text ${theme}`}>
          <header>
            <Navbar />
          </header>
          <main>
            { children }
          </main>
          <footer className="bg-ctp-mantle">
            <p>Footer</p>
          </footer>
        </div>
}
export default Layout