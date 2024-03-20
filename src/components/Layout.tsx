import { ReactNode, useState } from "react"
import Navbar from "./navbar/Navbar"
import { Theme } from "../types.d"

const getThemeFromStorage = () => {
  const theme = localStorage.getItem("theme")
  if (theme !== null) {
    return theme as Theme
  }
  return Theme.MOCHA
}

interface LayoutProps {
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [theme, setTheme] = useState(getThemeFromStorage());

  const cycleTheme = (t: Theme) => {
    const theme = t === Theme.MOCHA ? Theme.FRAPPE : t === Theme.FRAPPE ? Theme.LATTE : t === Theme.LATTE ? Theme.MOCHA : Theme.MOCHA
    setTheme(theme);
    localStorage.setItem("theme", theme)
  };

  return <div className={`text-lg font-inter min-h-screen container flex flex-col justify-between max-w-full m-0 bg-ctp-base text-ctp-text ${theme}`}>
          <header className="p-6 bg-ctp-mantle animate-slide-down">
            <Navbar cycleTheme={cycleTheme} theme={theme} />
          </header>
          {/* <div className="hidden sm:block">
            <p className="text-2xl font-maple"> you@github.io# ~ /<span>vedant</span><span>wankhade</span></p>
          </div> */}
          <main className="py-6 px-6 lg:px-16 xl:px-80 flex justify-center sm:justify-between gap-6">
            { children }
          </main>
          <footer className="p-6 bg-ctp-mantle flex justify-between">
            <p>&copy; 2024 Vedant Wankhade</p>
            <a href="https://github.com/vedantwankhade/vedantwankhade.github.io" target="_blank"><i className={`ri-github-fill text-3xl`}></i></a>
          </footer>
        </div>
}

export default Layout
