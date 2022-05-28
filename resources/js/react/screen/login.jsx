import React, { useState, useEffect } from 'react';
import Login from "../components/login";
import { login } from "../data/api";
import { useNavigate } from "react-router-dom";

export default function Form() {
    
    const navigate = useNavigate();

    const onSubmit = async (cred) => {
        let res = await login(cred);
        
        if(!res.success){
            alert("Login failed")
            return;
        }

        let {token } = res.data;

        localStorage.setItem("token",token)
        navigate("/")
    }

    return (
        <div>
            <div>
                <Login onSubmit={onSubmit} />
            </div>
        </div>
    )
}
