import { Link } from 'react-router-dom'

const Navbar = () => (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/experience">Work Experience</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
)

export default Navbar
