import './style.scss';
import React, { useState } from 'react';
import { Link } from "react-router-dom";



function Login(){
    return(
        <div className='Login'>
         
               <div className='buttons'>
                   <div className='inside'>

                            
                        
                        Username: <br />
                            <input type="text" />
                            <br /><br />
                            Password: <br />
                            <input type="password" />
                            <br />
                            <Link to="/Home">Login</Link>
                            
                            <br />
                            <Link to="/Home">Cancle</Link>
                    </div>
               </div>
               <div className='backHome'>

                    <Link to="/Home"> Home</Link>

                </div> 
        </div>
    )
}


export default Login;