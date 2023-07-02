import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Navbar() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/test')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

    return (
        <nav style={navStyle}>
            <div style={navContainer}>
                {data && (
                    <div style={profileStyle}>
                        <img src="/headshot.jpg" alt="Profile" style={imageStyle} />
                        <h1 style={textStyle}>{data.name}</h1>
                    </div>
                )}
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
            </div>
        </nav>
    );
}

const navContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    margin: '0 auto',
}

const navLinks = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center', 
}

const navStyle = {
    background: '#f0f0f0',
    padding: '20px',
    marginBottom: '20px'
}

const linkStyle = {
    color: '#000000',
    textDecoration: 'none',
    paddingRight: '20px'
}

const profileStyle = {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 'auto',
}

const imageStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginLeft: '20px',
}

const textStyle = {
    color: '#000000',
    marginLeft: '10px',
}

export default Navbar;
