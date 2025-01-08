import React, { useState } from 'react';
import './Navbar.css'; // Import custom CSS for styling

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
                    <a href="/">Boostgram</a>
                </div>

                {/* Hamburger menu for mobile */}
                <div className="menu-icon" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                {/* Navigation Links */}
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="/#Login">Sign In</a></li>
                    <li><a href="/#Register">Sign Up</a></li>
                    <li><a href="/#pricing">Pricing</a></li>
                    <li><a href="/terms">Terms</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
