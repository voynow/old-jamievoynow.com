import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Navbar() {
    return (
        <nav style={navStyle}>
            <div style={navContainer}>
                <div style={profileStyle}>
                    <img src="/headshot.jpg" alt="Profile" style={imageStyle} />
                    <h1 style={textStyle}>Jamie Voynow</h1>
                </div>
                <ul style={navLinks}>
                    <li>
                        <a href="https://github.com/voynow" style={linkStyle}>
                            <FaGithub style={socialIconStyle} /> GitHub
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/voynow" style={linkStyle}>
                            <FaLinkedin style={socialIconStyle} /> LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/jamievoynow" style={linkStyle}>
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
}

const linkStyle = {
    color: '#2c2c2c',
    textDecoration: 'none',
    paddingRight: '20px',
    fontFamily: "system-ui",
    fontSize: '1.1em',
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
    color: '#2c2c2c',
    fontSize: '1.5em',
    fontFamily: "system-ui",
    marginLeft: '10px',
}

export default Navbar;
