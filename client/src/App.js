import React from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import Projects from './Projects';

function App() {
    return (
        <div style={styles.App}>
            <Navbar />
            <div>
                <Profile />
                <Projects />
            </div>
        </div>
    );
}

const styles = {
    App: {
        backgroundColor: '#0f172a',
        height: '100vh',
    },
};

export default App;
