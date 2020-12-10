import React from "react"
import {Link} from "react-router-dom"
const NavBar=()=>{
    return(
    <div>
        <Link to="/">Home</Link><br/>
        <Link to="/addemployee">Add Employee</Link><br/>
        <Link to="/employee">Employee List</Link><br/>

    </div>
    );
};
export default NavBar;