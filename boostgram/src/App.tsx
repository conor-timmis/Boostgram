import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import TermsAndConditions from './components/TermsAndConditions';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
