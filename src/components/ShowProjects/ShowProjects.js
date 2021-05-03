import React from 'react';
import { Card } from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';
import './ShowProjects.css';
// import { Link, Route } from 'react-router-dom';
// import ProjectDetails from '../ProjectDetails/ProjectsDetails'

const ShowProjects = (props) => {
    const { projectName, projectDescription, gitrepo, liveSite, id, image } = props.work;
    console.log(props.work);
    // const history = useHistory();
    // const handleSelectProject = id => {
    //     history.push(`/details/${id}`);

    // }
    return (
        <div className="col-md-4  my-3 text-center justify-content-center align-items-center card-div">

            <Card className="card-holder text-info" style={{ width: '20rem', height: '29rem', margin: '20px' }}>
                <Card.Title><h2 className="text-dark">{projectName}</h2>
                </Card.Title>
                <Card.Img className="cardImage" style={{ height: '13rem' }} variant="top" src={image} />
                <Card.Body>
                    <div className="text-center">


                        <Card.Text className="text-dark">
                            {projectDescription}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aut odit iusto excepturi quam iure officiis assumenda nam quod nisi.
                        </Card.Text>


                        {/* <Card.Footer className=""> */}
                        <div className="row d-flex">
                            <div className="col">
                                <button className="button">
                                    <a style={{ color: 'white', textDecoration: 'none' }} target="_blank" rel="noreferrer" href={liveSite}>Live-Site</a>
                                </button>
                            </div>
                            <div className="col">
                                <button className="button">
                                    <a style={{ color: 'white', textDecoration: 'none' }} target="_blank" rel="noreferrer" href={gitrepo}>Git Repo </a>
                                </button>
                            </div>
                        </div>
                        {/* </Card.Footer> */}
                        {/* <button onClick={() => handleSelectProject(id)}><Link to="/details/:id">Details</Link></button> */}
                        {/* <Route path=""><ProjectDetails /></Route> */}

                    </div>
                </Card.Body>
            </Card>
        </div>

    );
};

export default ShowProjects;