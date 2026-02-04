import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import resume from '../../assets/Abdullah Resume.pdf';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <header className="header">
            <div className="container header-container">
                <Link to="/" className="logo">
                    Portfolio<span>.</span>
                </Link>

                <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>


                <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li><Link to="/" className={isActive('/')} onClick={toggleMenu}>Home</Link></li>
                        <li><Link to="/about" className={isActive('/about')} onClick={toggleMenu}>About</Link></li>
                        <li><Link to="/skills" className={isActive('/skills')} onClick={toggleMenu}>Skills</Link></li>
                        <li><Link to="/projects" className={isActive('/projects')} onClick={toggleMenu}>Projects</Link></li>
                        <li><Link to="/contact" className={isActive('/contact')} onClick={toggleMenu}>Contact</Link></li>
                        <li><a href={resume} download="Abdullah_Resume.pdf" className="btn-download">Download CV</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
export default Header;


