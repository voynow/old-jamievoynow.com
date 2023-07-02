import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Portfolio from './Portfolio';
import Project from './Project';
import Skills from './Skills';

function App() {
  return (
    <Router>
      <div style={styles.App}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/projects/:projectId" element={<Project />} />
        </Routes>
        <div style={styles.SkillsContainer}>
          <Skills />
        </div>
      </div>
    </Router>
  );
}

const styles = {
    App: {
        backgroundColor: '#f0f0f0',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
};

export default App;
