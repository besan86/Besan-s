import './Homestyle.scss';
import React, { useState } from 'react';
import { Link } from "react-router-dom";



const Home = () =>{
    return(
        <div className='Homepage'>

            <div className='buttons'>
            welcome to HomePage <br /><br />
            <Link to="/about"> About </Link>
            <br />
            <br/> 
            Name Of disease <br />
                <input type="text" />
                <br /><br />  <Link to="/search">Search</Link>
                <br /><br />
            


            </div>
            <div className='login'> <Link to="/login">Login</Link> </div>
        </div>
    )
}


export default Home;