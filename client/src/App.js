import React from 'react';
import Navbar from './Navbar';
import Projects from './Projects';
import Skills from './Skills';

function App() {
  return (
    <div style={styles.App}>
      <Navbar />
      <Skills />
      <Projects />
    </div>
  );
}

const styles = {
    App: {
        backgroundColor: '#f0f0f0',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    }
};


export default App;
