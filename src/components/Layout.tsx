import { ReactNode, useState } from "react"
import Navbar from "./navbar/Navbar"
import { Theme } from "../types.d"
import { Link } from "react-router-dom"

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
  const [ menuIcon, setMenuIcon ] = useState("menu-unfold-2")
  const [ slideMenuFlag, setSlideMenuFlag ] = useState("hidden sm:hidden")

  const toggleMenu = (i: string, j: string) => {
      setMenuIcon(i === "menu-unfold-2" ? "menu-fold-2" : "menu-unfold-2")
      console.log(i === "hidden" ? "block" : "hidden")
      setSlideMenuFlag(j === "hidden sm:hidden" ? "block sm:hidden" : "hidden sm:hidden")        
  }

  const cycleTheme = (t: Theme) => {
    const theme = t === Theme.MOCHA ? Theme.FRAPPE : t === Theme.FRAPPE ? Theme.LATTE : t === Theme.LATTE ? Theme.MOCHA : Theme.MOCHA
    setTheme(theme);
    localStorage.setItem("theme", theme)
  };

  return <div className={`text-lg font-inter min-h-screen container flex flex-col justify-between max-w-full m-0 bg-ctp-base text-ctp-text ${theme}`}>
          <header className="p-6 bg-ctp-mantle animate-slide-down sticky top-0 z-10">
            <Navbar cycleTheme={cycleTheme} theme={theme} toggleMenu={toggleMenu} menuIcon={menuIcon} slideMenuFlag={slideMenuFlag} />
          </header>
          {/* <div className="hidden sm:block">
            <p className="text-2xl font-maple"> you@github.io# ~ /<span>vedant</span><span>wankhade</span></p>
          </div> */}
          <div className={`${slideMenuFlag} z-10 bg-ctp-mantle animate-slide-left right-0 p-4 bottom-0 w-16 h-screen fixed translate-x-0`}>
            <ul className="flex flex-col gap-4 p-1">
              <button><i onClick={() => toggleMenu(menuIcon, slideMenuFlag)} className={`ri-${menuIcon}-fill text-3xl`}></i></button>
                <li><Link to="/"><i className={`ri-user-fill text-3xl`}></i></Link></li>
                <li><Link to="/skills"><i className={`ri-tools-fill text-3xl`}></i></Link></li>
                <li><Link to="/projects"><i className={`ri-code-s-slash-fill text-3xl`}></i></Link></li>
                <li><Link to="/experience"><i className={`ri-suitcase-fill text-3xl`}></i></Link></li>
                <li><Link to="/contributions"><i className={`ri-service-fill text-3xl`}></i></Link></li>
                <li><Link to="/contact"><i className={`ri-mail-fill text-3xl`}></i></Link></li>
            </ul>
          </div>
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
