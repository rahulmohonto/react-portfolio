import React from 'react';
import './HomeDetail.css';
import image from '../../images/Group 33085.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const HomeDetail = () => {
    return (
        <section className="container my-imageContainer mb-5">
            <div className="row d-flex align-items-center front-image-holder">
                <div className="front-image">
                    <div className="col-md-6 d-flex align-items-center name-personal-image">
                        <span className="name-title-holder"><h2 style={{ fontWeight: 650, fontSize: '2.3rem', color: 'white' }} className="ml-4 p-4">RAHUL <br />MOHONTA</h2>
                            <h5 className="ml-4 pl-4" style={{ color: 'white' }}>Front End Web-Developer-Designer</h5></span>
                        {/* <img src={frontImage} className="img-fluid" alt="/"></img> */}
                        {/* <div className="myImage-container"> */}
                        <img className="img-fluid myImage" src={image} alt="/"></img>
                        {/* </div> */}
                    </div>
                    <div className="row">
                        <div className="col d-flex">
                            <div className="buttons d-flex">
                                <button className="btn btn-success mr-2"><a href="https://drive.google.com/file/d/1Pu5vLsYi1AHyHDpySZBR3WiVIFqv2kIn/view?usp=sharing">See Resume</a></button>
                                <Button className="btn btn-success ml-2"><Link to="/projects">See My Work</Link></Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 ml-auto">
                        <p className="intro-text p-4 text-justify">Good Proffecient Skill-Full  Web developer means lots of responsibility in hands. And a trusted, confident and client-facing capable person makes the job and life more easier for you. With uses of latest technologies and experience, my work attracts people in better way to place orders.   </p>
                    </div>
                    {/* <div className="col d-flex">
                        <div className="buttons d-flex">
                            <Button className="btn btn-success mr-5"><Link to="/resume">Get Resume</Link></Button>
                            <Button className="btn btn-success ml-5"><Link to="/projects">See My Work</Link></Button>
                        </div>
                    </div> */}
                </div>
                {/* <div className="row">
                    <div className="col d-flex">
                        <div className="buttons d-flex">
                            <button className="btn btn-success mr-5"><a href="https://drive.google.com/file/d/1Pu5vLsYi1AHyHDpySZBR3WiVIFqv2kIn/view?usp=sharing">See Resume</a></button>
                            <Button className="btn btn-success ml-5"><Link to="/projects">See My Work</Link></Button>
                        </div>
                    </div>
                </div> */}

            </div>

        </section >
    );
};

export default HomeDetail;