import React, {useState,useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Link} from "react-router-dom";

import axios from "axios";
const EmployeeList=()=>{
    const [users, setUsers]=useState([]);
    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers = async ()=>{
     const result = await axios.get("http://localhost:3002/users");
     setUsers(result.data.reverse());     
    };

    return(
        <div>
            <h1>Employees List</h1>
            <ul>
                {
                    users.map((user,index)=>(
                        <li>
                            <Link to={`/about/${user.id}`}>{user.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};
export default EmployeeList;