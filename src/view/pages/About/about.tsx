import React from "react";

import "./style.scss";

import { Link } from "react-router-dom";



function About(){
    return (
        <div className="wrapper">
            <h1> About Our company  </h1>
            
            <br/> 
            <Link to="/Home"> Home</Link>     
                           
        </div>
    )
}


export default About;



