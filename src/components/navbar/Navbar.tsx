import { Link } from 'react-router-dom'
import { Theme } from '../../types.d'

interface NavbarProps {
    cycleTheme: (t: Theme) => void;
    theme: Theme
}

const Navbar: React.FC<NavbarProps> = ({ cycleTheme, theme }) => (
    <nav className='flex justify-between'>
        <div>
            <button onClick={() => cycleTheme(theme)}><i className={`ri-contrast-fill text-3xl`}></i></button>
        </div>
        <div>
        <ul className="hidden sm:flex justify-center gap-4">
            <li><Link to="/">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/contributions">Contributions</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="sm:hidden">
            Hamburger
        </div>
        </div>
    </nav>
)

export default Navbar
