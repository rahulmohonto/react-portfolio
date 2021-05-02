import React from 'react';
import './SocialConnection.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

const SocialConnection = () => {
    return (
        <section className="container social-main">
            <div className="row d-flex align-items-center">
                <h3 className="text-center">Connect Me On</h3>
                <div className="col-12 d-flex align-items-center justify-content-center social-icons">
                    <div className="col-4 micon">
                        <a className="link" href="https://web.facebook.com/rahul.mohonto.9/?viewas=100000686899395"> <FontAwesomeIcon className="facebook" icon={faFacebook} /></a>
                    </div>
                    <div className="col-4 micon">
                        <span>
                            <a className="link" href="https://github.com/rahulmohonto"><FontAwesomeIcon className="github" icon={faGithub} /></a>
                        </span>
                    </div>
                    <div className="col-4 micon">
                        <a className="link" href="https://www.linkedin.com/in/rahul-mohonta"> <FontAwesomeIcon className="linkedIn" icon={faLinkedin} />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SocialConnection;