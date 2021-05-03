import React from 'react';
import './SocialConnection.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
// import fix from '../../images/icons8-facebook-circled.gif';
// import fix2 from '../../images/icons8-linkedin-circled.gif';

const SocialConnection = () => {
    return (
        <section className="container social-main">
            <div className="row d-flex align-items-center">
                <h3 className="text-center m-auto text-success">Connect Me On</h3>
                <div className="col-12 d-flex align-items-center justify-content-center social-icons">
                    <div className="col-4 micon">
                        <a className="link" href="https://web.facebook.com/rahul.mohonto.9/?viewas=100000686899395">
                            {/* <img className="img-fluid facebook" alt="/" src={fix} /> */}
                            <FontAwesomeIcon className="facebook" icon={faFacebook} />
                        </a>
                        {/* <FontAwesomeIcon className="facebook" icon={faFacebook} /> */}
                    </div>
                    <div className="col-4 micon">
                        <span>
                            <a className="link" href="https://github.com/rahulmohonto"><FontAwesomeIcon className="github" icon={faGithub} /></a>
                        </span>
                    </div>
                    <div className="col-4 micon">
                        <a className="link" href="https://www.linkedin.com/in/rahul-mohonta">
                            {/* <img className="img-fluid linkedIn" alt="/" src={fix2} /> */}
                            <FontAwesomeIcon className="linkedIn" icon={faLinkedin} />
                        </a>
                        {/* <FontAwesomeIcon className="linkedIn" icon={faLinkedin} /> */}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SocialConnection;