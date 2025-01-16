import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import TermsAndConditions from './components/TermsAndConditions';
import UserPanel from './components/UserPanel';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Functions to handle login and logout
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  // ProtectedRoute wrapper
  const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return isAuthenticated ? <>{children}</> : <Navigate to="/" replace />;
  };

  return (
    <Router>
      <div className="App">
        {/* Pass isAuthenticated and onLogout to Navbar */}
        <Navbar isAuthenticated={isAuthenticated} onLogout={logout} />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage onLogin={login} />} />
          <Route path="/terms" element={<TermsAndConditions />} />

          {/* Protected Route for UserPanel */}
          <Route
            path="/user-panel"
            element={
              <ProtectedRoute>
                <UserPanel onLogout={logout} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
