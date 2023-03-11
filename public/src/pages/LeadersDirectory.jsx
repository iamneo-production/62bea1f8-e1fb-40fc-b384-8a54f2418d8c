import React , {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import {user} from "../utils/ApiRoutes";
import NavBar from "../components/Pawandi/Navbar";
import Footer from "../components/Pawandi/Footer";

function LeadersDir(){

   const [tableData,setTableData] = useState([]);
    useEffect(()=>{
    axios.get(user)
    .then(response=>{
        setTableData(response.data);
    });
    },[])
    return(
<>
<NavBar/>
<Dir>
<h1>Find Tech Leads in  Your Field.</h1>
<table>
    <tbody>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Country</th>
            <th>About</th>
        </tr>
    {tableData.map((user)=>(
        <tr key={user.username}><td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.country}</td>
        <td>{user.bio}</td>
        </tr>
    ))}
    </tbody></table>
    </Dir>
    <p></p>
    <Footer/>
    </>
    )
}

const Dir = styled.div`

table{
    background-color:#2B838C;
    width:100%;
    border:1px solid;
    padding-top:5%;
    padding-bottom:5%;
}
th,td,tr{
    color: White;
    border:1px solid;
    padding:1%;
}

h1{
    font-style:'monaco';
    text-align: center;
    color:#0C3640;
    padding:2%
}


`;


export default LeadersDir;

