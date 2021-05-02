import React from 'react';
import './Contact.css'
import emailjs from 'emailjs-com';

const Contact = () => {
    function sendMeEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_brpql3f', 'template_se3cumu', e.target, 'user_ktBBG3kmWwHAVHbd1y3Pz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <div className="container">
            <div className="cotact-info p-4 m-2 bg-info">
                <h4>Email : rahulmohonto1999@gmail.com</h4>
                <h4>Phone : 01789653801</h4>
                <h4>LinkedIn : https://www.linkedin.com/in/rahul-mohonta</h4>
                <h4>Github : https://github.com/rahulmohonto</h4>
            </div>
            <div className="cotact-form-holder">
                <form className="contact-form" onSubmit={sendMeEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col">
                            <input className="form-control" type="hidden" name="contact_number" /><br />
                            <label>Name</label>
                            <input className="form-control" type="text" name="name" /><br />
                            <label>Email</label>
                            <input className="form-control" type="email" name="email" /><br />
                            <label>Subject</label>
                            <input className="form-control" type="text" name="subject" /><br />
                            <label>Write Your Message</label>
                            <textarea className="form-control" name="message" /><br />
                            <input className="btn btn-warning mt-4 pr-4 pl-4 mb-3 text-white" type="submit" value="Send" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;