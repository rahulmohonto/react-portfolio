import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectsDetails = () => {
    const { id } = useParams();
    console.log(id)
    return (
        <div>
            <h3>for specific project detail.</h3>
        </div>
    );
};

export default ProjectsDetails;