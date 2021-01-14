import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
            <footer className="page-footer fixed bottom">

                <div className="container">
                    <div className="row justify-contect-center fixed-bottom bg-primary">
                        <div className="col text-center">
                            {/* LINKEDIN */}
                            <Link to="https://www.linkedin.com/in/marisol-aguirre-93688296/"
                                className="text-pink btn-floating btn-lg btn-li" type="button" role="button" target="_blank"><i
                                    className="fab fa-linkedin-in"></i>
                            </Link>
                            {/* GITHUB */}
                            <Link to="https://github.com/solaguirre"
                                className="text-pink btn-floating btn-lg btn-git" type="button" role="button" target="_blank"><i
                                    className="fab fa-github"></i>
                            </Link>
                            <br></br>
                            <p className="text-light">&copy; 2021 Marisol Aguirre. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>


            </footer>


        </div>
    )
}

export default Footer;