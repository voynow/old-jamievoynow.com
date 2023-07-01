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
        backgroundColor: '#f0f0f0',
        height: '100vh',
    },
};

export default App;
