import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { colors } from './Theme';

function Portfolio() {
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        fetch('/portfolio')
            .then(response => response.json())
            .then(data => setPortfolio(data));
    }, []);

    return (
        <div style={portfolioStyle}>
            <h1 style={textStyle}>Portfolio</h1>
            <div style={projectContainer}>
                {portfolio.map((project, index) => (
                    <Link to={`/portfolio/${project.name}`} key={project.name} style={{ textDecoration: 'none' }}>
                        <div className="project-block">
                            <img src={project.imageUrl} alt={project.name} style={imageStyle} />
                            <div style={textContainer}>
                                <h2 style={projectTitle}>{project.name}</h2>
                                <p style={projectDescription}>{project.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

const textContainer = {
    padding: '10px 20px',
};

const portfolioStyle = {
    background: colors.lightGrey,
    margin: '20px auto',
    width: '95%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '50px'
};

const projectContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'npwrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    overflowX: 'auto',
};

const projectTitle = {
    color: colors.text,
    fontFamily: "system-ui",
    fontSize: '1.5em',
};

const projectDescription = {
    fontFamily: "system-ui",
    color: colors.text,
};

const textStyle = {
    color: colors.text,
    marginBottom: '20px',
    fontFamily: "system-ui",
};

const imageStyle = {
    width: '100%',
    borderRadius: '10px 10px 0 0',
    filter: 'grayscale(50%) contrast(120%)'
};

export default Portfolio;
