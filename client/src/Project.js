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
            <div style={styles.page}>
                <div style={styles.chatContainer}>
                    <Chat project={project} />
                </div>
            </div>
        )
    );
};

const styles = {
    page: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px auto',
        color: '#2c2c2c',
        width: '100%',
        height: '200vh',
        fontSize: '18px',
    },
    chatContainer: {
        width: '80%',
        height: 'calc(100% - 40px)', 
        backgroundColor: '#f0f0f0',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', 
    },
};

export default Project;
