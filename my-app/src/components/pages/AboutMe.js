import React from "react";

function AboutMe() {

    return (
        <>
            <div className="container" style={ }>
                <div className="row">
                    <div className="col text-center">
                        <h1 className="text-white" style={ }>About Me</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <p>
                            Welcome! I am Marisol Aguirre from Tucson, Arizona.
                            I am a junior web developer currently taking courses in Full Stack Development at
                            the University of Arizona. I have experience working with people from all walks of life, the last few years I have worked as a Two-Way Dual Language Kindergarten teacher.</p>
                        <p>
                            I am interested in pursuing my skills as a web developer and inspire a new generation of students to think like software engineers. My current technical skills include HTML5, CSS, Bootstrap, JavaScript, jQuery, JSON, AJAX, Node.js, Express.js, MySQL, Sequelize, MVC, MongoDB/Mongoose and React.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMe;