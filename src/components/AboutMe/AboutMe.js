import React from 'react';
import './AboutMe.css';
import aboutImage from '../../images/About-Image.png';
import Button from 'react-bootstrap/Button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import logg from '../../images/icons8-dots-loading.gif'

const AboutMe = () => {
    return (
        <section className="container about">

            <div className="container main">
                <div className="row d-flex justify-content-center">
                    <div className="col-3 about-image-holder">
                        <img src={aboutImage} alt="/" className="img-fluid about-image"></img>
                    </div>

                    <div className="col-8 text-justify mt-3" >
                        <h2 className="text-center mb-3">About Rahul Mohonta</h2>
                        <p >I am a Front-end Developer with one and half years of footprints in developing section, and taken 4 months course of Full Stack Web-Development Course from Programming Hero Community. I create successful websites that are fast, easy to use, and built with best practices.</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-5" style={{ boxSizing: 'border-box', padding: '18px' }}>
                        <Button className="btn btn-skill m-1">HTML</Button>
                        <Button className="btn btn-skill m-1">CSS3</Button>
                        <Button className="btn btn-skill m-1">Bootstrap</Button>
                        <Button className="btn btn-skill m-1">JavaScript</Button>
                        <Button className="btn btn-skill m-1">React</Button>
                        <Button className="btn btn-skill m-1">Node JS</Button>
                        <Button className="btn btn-skill m-1">Express Js</Button>
                        <Button className="btn btn-skill m-1">MySQL</Button>
                        <Button className="btn btn-skill m-1">Mongo DB</Button>
                    </div>
                    <div className="col-7 text-justify">
                        <p className="text-justify">I use HTML, CSS, and JavaScript to produce responsive websites and web apps that provide users the best and most appropriate experience suited to their device and browser.</p>
                        <p> According to width of devices i make website responsive and try to make most responsive site using CSS styles like media query , grid system and flexbox layout. </p>
                    </div>
                </div>
                <div className="row d-flex align-items-center justify-content-center mt-4">
                    <div className="col-5">
                        <div>
                            <img src="https://img.icons8.com/fluent/76/000000/adobe-illustrator.png" alt="/" />
                            <img src="https://img.icons8.com/color/76/000000/adobe-photoshop.png" alt="/" />
                            <img src="https://img.icons8.com/dusk/64/000000/design--v2.png" alt="/" />
                            <img src="https://img.icons8.com/plasticine/100/000000/sketch.png" alt="/" />
                            <img className="img-fluid log" src={logg} alt="/"></img>
                        </div>
                    </div>
                    <div className="col-7 text-justify">
                        <h2 className="text-center mb-2">Design & Prototyping</h2>
                        <p>First impression is the best impression and best feelings. So work should be like ,people get the feeling of being in right place to hire your whenever they look at your work.
                        My believe is that it is important to understand both design and development to achieve a successful user-facing product. So it can not be overlooked if your design doesn't get user attention.By involving a front-end developer at the design & prototyping phase, technical challenges can be solved early, producing a more cohesive product in the most time efficient manner.</p>

                        <p>So before sit into coding I take pen & paper to design outer-most look and calculate the possible functionality which should make the code run smoother. These prototypes & sketch are preety good in-view from design and interaction angle, that enable a team to experience how a user interface will feel before it is coded.And in this process feedback from user and both production manager comes in handy, helps to utilize further suggestions in the best possible way. </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AboutMe;