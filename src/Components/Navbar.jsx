import '../css/Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <h2 id='myName'>Cameron Canfield</h2>
            <ul className="nav-topics">
                <li id='about'>About</li>
                <li id='projects'>Projects</li>
                <li id='resume'>Resume</li>
                <li id='contact'>Contact</li>
            </ul>
        </nav>
    )
}