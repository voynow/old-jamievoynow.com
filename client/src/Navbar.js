import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { colors } from './Theme';

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
