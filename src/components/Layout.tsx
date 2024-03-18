import { ReactNode, useState } from "react"
import Navbar from "./navbar/Navbar"
import { Theme } from "../types.d"

const getThemeFromStorage = () => {
  // TODO))
  return Theme.MOCHA
}

interface LayoutProps {
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [theme, setTheme] = useState(getThemeFromStorage());

  const cycleTheme = (t: Theme) => {
    setTheme(t === Theme.MOCHA ? Theme.FRAPPE : t === Theme.FRAPPE ? Theme.LATTE : t === Theme.LATTE ? Theme.MOCHA : Theme.MOCHA);
  };

  return <div className={`font-inter min-h-screen container flex flex-col justify-between max-w-full m-0 bg-ctp-base text-ctp-text ${theme}`}>
          <header className="p-6 bg-ctp-mantle">
            <Navbar cycleTheme={cycleTheme} theme={theme} />
          </header>
          <main className="py-6 px-4 md:px-16 lg:px-16 xl:px-96 flex justify-center sm:justify-between gap-6">
            { children }
          </main>
          <footer className="p-6 bg-ctp-mantle">
            <p>Footer</p>
          </footer>
        </div>
}
export default Layout