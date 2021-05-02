import React from 'react';
import './Navbar.css';
import {
    Link
} from "react-router-dom";
import logo from '../../images/R M.png';


const NavbarHeader = () => {
    return (
        <section className="container navbar-section mt-2 rounded">
            <div className="navbar-holder">
                <div className="row d-flex align-items-center">
                    <div className="col-md-5 col-sm-4 pl-4">
                        <div className="d-flex">
                            <img style={{ height: '80px', width: '90px' }} src={logo} alt="/"></img>
                            <h3 style={{ color: 'white', fontWeight: '650', zIndex: 1 }}>RAHUL &nbsp; MOHONTA </h3>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-6">
                        <nav className="navbar navbar-expand-lg navbar-light justify-content-end text-right">

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
                                <ul className="navbar-nav text-right">
                                    <li className="nav-item active">
                                        <Link style={{ color: 'orange' }} className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/projects">Projects</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/blogs">Blogs</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About Me</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link style={{ color: 'orange' }} className="nav-link" to="/contact">Contact Me</Link>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default NavbarHeader;