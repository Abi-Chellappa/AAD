import React from "react";
import '../assets/css/Sucess.css';
import { Link } from "react-router-dom";
export default function Success(){
    
    return(
        <div className="success">
            <div className="success-msg ">
                <p>Success! <br/>Your form has been submitted.</p>
             <Link to='/'>   <button type="submit" className="book_sub">Ok</button>&nbsp; </Link>
             
              </div>
              </div>  
    );
}