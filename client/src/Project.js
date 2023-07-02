import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
            <div>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
            </div>
        )
    );
};

export default Project;