import { ReactNode, useState } from "react"
import Navbar from "./navbar/Navbar"

const getThemeFromStorage = () => {
  // TODO))
  return Theme.DARK
}

interface LayoutProps {
    children: ReactNode
}

enum Theme {
  DARK = "ctp-mocha",
  LIGHT = "ctp-latte"
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [theme, setTheme] = useState(getThemeFromStorage());

  const toggleTheme = (t: Theme) => {
    console.log(t === Theme.DARK ? Theme.LIGHT : Theme.DARK)
    setTheme(t === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };

  return <div className={`font-inter min-h-screen container flex flex-col justify-between max-w-full m-0 bg-ctp-base text-ctp-text ${theme}`}>
          <header className="p-6 bg-ctp-mantle">
            <Navbar toggleTheme={toggleTheme} theme={theme} />
          </header>
          <main className="py-6 px-4 md:px-16 lg:px-16 xl:px-96 flex justify-center sm:justify-between gap-6">
            { children }
          </main>
          <footer className="p-6 bg-ctp-mantle">
            <p>Footer</p>
          </footer>
        </div>
}
export {Layout, Theme}