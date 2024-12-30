import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
    const { isAuthenticated, logout } = useAuth();

    return (
        <nav>
            {isAuthenticated ? (
                <>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </nav>
    );
};

export default Navbar;
