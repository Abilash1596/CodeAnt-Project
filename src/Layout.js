import React from "react";
import { Link } from "react-router-dom";

function Layout()
{
    return(
        <div>
        <Link to='/'>Home</Link>
        <Link to='/signin'>Signin</Link>
        </div>
    )
}
export default Layout