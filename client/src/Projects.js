import React, { useEffect, useState } from 'react';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects') // assuming your Flask app has an endpoint at /projects
            .then(response => response.json())
            .then(data => setProjects(data));
    }, []);

    return (
        <div style={projectsStyle}>
            <h1 style={textStyle}>Projects</h1>
            <div style={projectContainer}>
                {projects.map((project, index) => (
                    <div key={index} style={projectStyle}>
                        <h2 style={projectTitle}>{project.title}</h2>
                        <p style={projectDescription}>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

const projectsStyle = {
    background: '#f2f2f2',
    color: '#000000',
    padding: '20px',
    margin: '20px auto', // added auto to center the section
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // center the content
}

const projectContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  width: '100%',
}

const projectStyle = {
  background: '#ffffff',
  borderRadius: '10px',
  width: '45%',
  padding: '20px',
  margin: '10px',
  boxSizing: 'border-box',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  transition: '0.3s',
  color: '#000000',
  textAlign: 'center',
  marginBottom: '20px'
}

const projectTitle = {
    color: '#000000',
    fontSize: '1.5em', // increased font size for a more modern look
}

const projectDescription = {
    color: '#000000',
}

const textStyle = {
    color: '#000000',
    marginBottom: '20px' // add some space below the heading
}

export default Projects;