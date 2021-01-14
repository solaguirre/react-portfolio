import React from "react";

import { Link } from "react-router-dom";

function Home() {

    return (
        <>
            <div style={ }>
                <div className="col text-center">
                    <h1 className="">Marisol Aguirre</h1>p

                <p>I am full-stack developer. Learn more about me and browse through my projects below.</p>

                    <Link to="/AboutMe"><button className="btn btn-success button" style={ }>About Me</button></Link>

                    <Link to="/Portfolio"><button className="btn btn-success button" style={ }>Portfolio</button></Link>
                </div>




            </div>

        </>
    )
}

export default Home;