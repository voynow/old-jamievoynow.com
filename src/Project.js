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
        margin: '10px auto',
        width: '100%',
    },
    chatContainer: {
        width: '80%',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', 
    },
};

export default Project;
