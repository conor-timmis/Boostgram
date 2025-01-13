import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <header className="navbar-container">
            <nav className="navbar">
                {/* Logo or brand name */}
                <div className="logo">
                    <a href="/">
                        <i className="fas fa-rocket"></i> Boostgram
                    </a>
                </div>

                {/* Hamburger menu for mobile */}
                <div className="menu-icon" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                {/* Navigation Links */}
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li>
                        <a href="/#Login">
                            <i className="fas fa-sign-in-alt"></i> Sign In
                        </a>
                    </li>
                    <li>
                        <a href="/#features">
                            <i className="fas fa-lightbulb"></i> Features
                        </a>
                    </li>
                    <li>
                        <a href="/#pricing">
                            <i className="fas fa-dollar-sign"></i> Pricing
                        </a>
                    </li>
                    <li>
                        {/* Link to the Terms and Conditions page */}
                        <Link to="/terms">
                            <i className="fas fa-file-contract"></i> Terms
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
