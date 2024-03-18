import { Link } from 'react-router-dom'
import { Theme } from '../Layout'

interface NavbarProps {
    toggleTheme: (t: Theme) => void;
    theme: Theme
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, theme }) => (
    <nav className='flex justify-between'>
        <div>
            <button onClick={() => toggleTheme(theme)}>Toggle</button>
        </div>
        <div>
        <ul className="hidden sm:flex justify-center gap-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/experience">Work Experience</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        </div>
    </nav>
)

export default Navbar
