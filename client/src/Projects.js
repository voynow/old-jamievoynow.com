import React from 'react';

function Projects() {
  return (
    <div style={projectsStyle}>
      <h1 style={textStyle}>Projects</h1>
      <div style={projectContainer}>
        <div style={projectStyle}>
          <h2 style={projectTitle}>Project 1</h2>
          <p style={projectDescription}>Description for Project 1</p>
        </div>
        <div style={projectStyle}>
          <h2 style={projectTitle}>Project 2</h2>
          <p style={projectDescription}>Description for Project 2</p>
        </div>
        <div style={projectStyle}>
          <h2 style={projectTitle}>Project 3</h2>
          <p style={projectDescription}>Description for Project 3</p>
        </div>
      </div>
    </div>
  );
}

const projectsStyle = {
  background: '#121a2e',
  color: '#a1accd',
  padding: '20px',
  margin: '20px',
  width: '90%',
}

const projectContainer = {
  display: 'flex',
}

const projectStyle = {
  background: '#1e2c41',
  borderRadius: '10px',
  flex: 1,
  padding: '10px',
  margin: '10px',
  boxSizing: 'border-box',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  transition: '0.3s',
  color: '#a1accd',
  textAlign: 'center'  // to center the text within each project
}

const projectTitle = {
  color: '#61dafb',
}

const projectDescription = {
  color: '#a1accd',
}

const textStyle = {
  color: '#61dafb'
}

export default Projects;
