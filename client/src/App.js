import React from 'react';
import Navbar from './Navbar';
import Portfolio from './Portfolio';
import Skills from './Skills';

function App() {
  return (
    <div style={styles.App}>
      <Navbar />
      <Portfolio />
      <div style={styles.SkillsContainer}>
        <Skills />
      </div>
    </div>
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
