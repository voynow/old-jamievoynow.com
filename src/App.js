import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Portfolio from './Portfolio';
import Project from './Project';
import Skills from './Skills';
import { colors } from './Theme';

function AppContent() {
  const location = useLocation();
  const isOnPortfolioPage = location.pathname === "/";

  return (
    <div style={styles.App}>
        <Navbar />
        {/* <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/portfolio/:projectName" element={<Project />} />
        </Routes> */}
        {isOnPortfolioPage && (
          <div style={styles.SkillsContainer}>
            <Skills />
          </div>
        )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

const styles = {
    App: {
        backgroundColor: colors.lightGrey,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
};

export default App;
