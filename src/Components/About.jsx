import React, {useState,useEffect} from "react";
import axios from "axios";
import {Link,useParams} from 'react-router-dom';
const About=()=>{
    const [user, setUser]=useState({
        name: "",
        age: "",
        sex: "",
        role: "",
        email: "",
        phone: ""
    });
    const {id}=useParams();
    useEffect(()=>{
        loadUser();
    } ,[]);   
    const loadUser=async()=>{
        const res= await axios.get(`http://localhost:3002/users/${id}`)
            setUser(res.data);
    };
    return(
        <div>
            <h1>About</h1>
            Name: {user.name}<br/>
            Age: {user.age}<br/>
            Sex: {user.sex}<br/>
            Role: {user.role}<br/>
            Email: {user.email}<br/>
            Phone: {user.phone}<br/>


            <div className="LinksOfHome">
             <Link to="/employee">Employees List</Link>
            </div>
        </div>
    );
};
export default About;