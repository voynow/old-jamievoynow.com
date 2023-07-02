import React, { useEffect, useState } from 'react';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects')
            .then(response => response.json())
            .then(data => setProjects(data));
    }, []);

    return (
        <div style={projectsStyle}>
            <h1 style={textStyle}>Projects</h1>
            <div style={projectContainer}>
                {projects.map((project, index) => (
                    <div key={index} className="project-block">
                        <h2 style={projectTitle}>{project.name}</h2>
                        <p style={projectDescription}>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

const projectsStyle = {
    background: '#f0f0f0',
    color: '#000000',
    margin: '20px auto',
    width: '95%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}
const projectContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    overflowX: 'auto',
  }
  

const projectTitle = {
    color: '#000000',
    fontSize: '1.5em',
}

const projectDescription = {
    color: '#000000',
}

const textStyle = {
    color: '#000000',
    marginBottom: '20px'
}

export default Projects;