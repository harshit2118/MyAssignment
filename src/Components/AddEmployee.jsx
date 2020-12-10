import React, {useState} from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom';
const AddEmployee=()=>{
    let history=useHistory();
    const [user,setUser]=useState({
        name: "",
        age: "",
        sex: "",
        role: "",
        email: "",
        phone: ""


    });
    const {name,age,sex,role,email,phone}=user;
    const onInputChange=e=>{
         setUser({...user,[e.target.name]:e.target.value})
    };
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.post("http://localhost:3002/users",user);
        history.push("/employee");
    }
    return(
        <div>
            <h1>Submit Form</h1>
            <form onSubmit={e=>onSubmit(e)}>
                  <label for="name">Name</label>
                  <input type="text" name="name" value={name} onChange={e=>onInputChange(e)}/><br/><br/>
    
                  <label for="age">Age</label>
                  <input type="text" name="age" value={age} onChange={e=>onInputChange(e)}/><br/><br/>
    
                  <label for="sex">Gender:</label><br/>
                  <input type="radio" id="male"  name="sex" value="Male" onChange={e=>onInputChange(e)}/>
                  <label for="male">Male</label>
                  <input type="radio" id="female" name="sex" value="Female" onChange={e=>onInputChange(e)}/>
                  <label for="female">Female</label>
                  <input type="radio" id="other" name="sex" value="Others" onChange={e=>onInputChange(e)}/>
                  <label for="other">Other</label><br/><br/>
    
                  <label for="role">Role:</label>
                  <input type="text" name="role" value={role} onChange={e=>onInputChange(e)}/><br/><br/>
    
                  <label for="email">Email:</label>
                  <input type="email" name="email" value={email} onChange={e=>onInputChange(e)}/><br/><br/>
                  <label for="phoneno">Phone No:</label>
                  <input type="text" name="phone" value={phone} onChange={e=>onInputChange(e)}/><br/><br/>
    
                  <input type="submit" value="Add"/>
            </form>
        </div>
            
    );
};
export default AddEmployee;