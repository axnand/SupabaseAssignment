import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import DashboardPage from './pages/DashboardPage';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage /> } />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
