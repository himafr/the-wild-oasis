/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser"
import Spinner from "./Spinner";
import {  useNavigate } from "react-router-dom";
import { useEffect } from "react";
const FullPage=styled.div`
height: 100vh;
background-color: var(--color-grey-50);
display: flex;
align-items: center;
justify-content: center;
`
function ProtectedRoute({children}) {
    const navigate=useNavigate()
    //1 load authentcated user 
const {isLoading,isAuthenticated}=useUser();
// 2 if not authentcated  redirect to login page 
useEffect(function(){
    if(!isAuthenticated&&!isLoading) navigate("/login",{replace:true})
    },[isAuthenticated,isLoading,navigate])
    //3  while loading show spinner
    if(isLoading)return <FullPage><Spinner /></FullPage>;
    //if  authentcated  redirect to app  
    return (children)
}

export default ProtectedRoute
