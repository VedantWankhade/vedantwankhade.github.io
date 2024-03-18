import { Link } from 'react-router-dom'
import { Theme } from '../../types.d'

interface NavbarProps {
    cycleTheme: (t: Theme) => void;
    theme: Theme
}

const Navbar: React.FC<NavbarProps> = ({ cycleTheme, theme }) => (
    <nav className='flex justify-between'>
        <div>
            <button onClick={() => cycleTheme(theme)}>Toggle</button>
        </div>
        <div>
        <ul className="hidden sm:flex justify-center gap-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/experience">Work Experience</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="sm:hidden">
            Hamburger
        </div>
        </div>
    </nav>
)

export default Navbar
