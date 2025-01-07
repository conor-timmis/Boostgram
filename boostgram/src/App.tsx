import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
};

export default App;
