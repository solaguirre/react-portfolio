import React from "react";
import { Link } from "react-router-dom";

function Contact() {


    return (
        <>
            <div className="container" style={ }>
                <div className="row">
                    <div className="col text-center text-pink">
                        <h1>Contact Me</h1>

                        {/* RESUME */}
                        <div><Link to="INSERT RESUME PATH HERE" className="btn-floating btn-lg" role="button" target="_blank">
                            <h3 className="text-pink">Professional Resume</h3>
                        </Link></div>


                        {/* LINKEDIN */}

                        <div><Link to="https://www.linkedin.com/in/marisol-aguirre-93688296/" className="btn-floating btn-lg" role="button" target="_blank">
                            <h3 className="text-pink">LinkedIn Profile</h3></Link>
                        </div>

                        {/* GITHUB */}

                        <div><Link to="https://github.com/solaguirre" className="btn-floating btn-lg btn-git text-pink" role="button"> target="_blank"><i className="fab fa-github"> solaguirre</i>
                            <h3 className="text-pink">Github Profile</h3>
                        </Link></div>

                        {/* email */}

                        <div><Link to="mailto:soulaguirre@gmail.com" className="btn-floating btn-lg btn-email text-pink" role="button" target="_blank"><i className="fas fa-envelope"></i> soulaguirre@gmail.com</Link>
                        </div>

                        {/* phone # */}

                        <div><Link to="tel: (520) 336-8017" className="btn-floating btn-lg btn-email text-pink" role="button" target="_blank"><i className="fa fa-phone" aria-hidden="true"></i> (520) 336-8017</Link>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )

};

export default Contact;