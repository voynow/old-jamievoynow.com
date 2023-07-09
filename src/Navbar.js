import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { colors } from './Theme';
import headshot from './images/headshot.jpg';

function Navbar() {
    const [hoveredLink, setHoveredLink] = useState(null);

    const getLinkStyle = (linkName) => {
        return hoveredLink === linkName ? { textDecoration: 'underline' } : {};
    };

    return (
        <nav style={navStyle}>
            <div style={navContainer}>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={profileStyle}>
                        <img src={headshot} alt="Profile" style={imageStyle} />
                        <h1 style={{ ...textStyle, ...getLinkStyle('name') }}
                            onMouseEnter={() => setHoveredLink('name')}
                            onMouseLeave={() => setHoveredLink(null)}
                        >Jamie Voynow</h1>
                    </div>
                </Link>
                <ul style={navLinks}>
                    <li>
                        <a href="https://github.com/voynow" style={{ ...linkStyle, ...getLinkStyle('github') }}
                            onMouseEnter={() => setHoveredLink('github')}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            <FaGithub style={socialIconStyle} /> GitHub
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/voynow" style={{ ...linkStyle, ...getLinkStyle('linkedin') }}
                            onMouseEnter={() => setHoveredLink('linkedin')}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            <FaLinkedin style={socialIconStyle} /> LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/jamievoynow" style={{ ...linkStyle, ...getLinkStyle('twitter') }}
                            onMouseEnter={() => setHoveredLink('twitter')}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            <FaTwitter style={socialIconStyle} /> Twitter
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
    width: '95%',
    margin: '0 auto',
}

const navLinks = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
}

const navStyle = {
    background: colors.lightGrey,
    padding: '20px',
}

const linkStyle = {
    color: colors.text,
    textDecoration: 'none',
    paddingRight: '20px',
    fontFamily: 'system-ui',
    fontSize: '1.2em',
    display: 'flex',
    alignItems: 'center',
}

const socialIconStyle = {
    fontSize: '1.5em',
    marginRight: '5px',
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
    color: colors.text,
    fontSize: '1.5em',
    fontFamily: "system-ui",
    marginLeft: '10px',
}

export default Navbar;
