import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Chat from './Chat';

const Project = () => {
    const [project, setProject] = useState(null);
    const { projectName } = useParams();

    useEffect(() => {
        fetch(`/portfolio/${projectName}`)
            .then(response => response.json())
            .then(data => setProject(data));
    }, [projectName]);

    return (
        project && (
            <div style={projectContainer}>
                <h1 style={projectTitle}>{project.name}</h1>
                <p style={projectDescription}>{project.description}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer" style={projectLink}>Visit the Project</a>
                <Chat />
            </div>
        )
    );
};

    const projectContainer = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: '20px auto',
        background: '#ffffff',
        color: '#2c2c2c',
        width: '80%',
        borderRadius: '10px',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        padding: '20px'
    };

    const projectTitle = {
        fontSize: '2em',
        marginBottom: '10px'
    };

    const projectDescription = {
        fontSize: '1.2em',
        margin: '10px 0'
    };

    const projectLink = {
        textDecoration: 'none',
        fontSize: '1.2em',
        color: '#2c2c2c',
        border: '2px solid #2c2c2c',
        padding: '10px',
        borderRadius: '5px'
    };

    export default Project;
