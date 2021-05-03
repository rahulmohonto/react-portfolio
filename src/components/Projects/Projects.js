import React, { useState, useEffect } from 'react';
import Data from '../ProjectData/ProjectData.json';
import ShowProjects from '../ShowProjects/ShowProjects';

const Projects = () => {
    const [works, setWorks] = useState([])
    useEffect(() => {
        setWorks(Data)
        console.log(works)
    }, [works])
    return (
        <section className="container">
            <div className="row">
                {
                    works.map(work => <ShowProjects work={work} key={work.id} />)
                }
            </div>

        </section>
    );
};

export default Projects;