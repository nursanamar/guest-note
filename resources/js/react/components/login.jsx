import React, { useState, useEffect } from 'react';

export default function Form({ onSubmit = () => { } }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <input value={email} onIn onChange={(e) => setEmail(e.target.value)} type="text" placeholder='email' /><br />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' /><br />

            <button onClick={() => {
                let data = {
                    email,
                    password
                }
                onSubmit(data)
            }}>Submit</button>

        </>
    )
}
