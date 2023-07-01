// client/src/Navbar.js

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Navbar() {
    return (
        <nav style={navStyle}>
            <ul style={navLinks}>
                <li>
                    <a href="https://github.com/your_username" style={linkStyle}>
                        <FaGithub /> GitHub
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/your_username" style={linkStyle}>
                        <FaLinkedin /> LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/your_username" style={linkStyle}>
                        <FaTwitter /> Twitter
                    </a>
                </li>
            </ul>
        </nav>
    );
}

const navLinks = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'flex-start'
}

const navStyle = {
    background: '#e0e0e0',
    padding: '20px'
}

const linkStyle = {
    color: '#000000',
    textDecoration: 'none',
    paddingRight: '20px'
}



export default Navbar;
