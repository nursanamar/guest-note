import React, { useState, useEffect } from 'react';

export default function Form({onSubmit = () => {}}) {
    const [name,setName] = useState("");
    const [address,setAddress] = useState("")
    const [phone,setPhone] = useState("");
    const [note,setNote] = useState("");

    return (
        <>
            <input value={name} onIn onChange={(e) =>setName(e.target.value)} type="text" placeholder='name' /><br />
            <input value={address} onChange={(e) =>setAddress(e.target.value)} type="text" placeholder='address' /><br />
            <input value={phone} onChange={(e) =>setPhone(e.target.value)} type="text" placeholder='phone' /><br />
            <textarea onChange={(e) =>setNote(e.target.value)} name="" id="" cols="30" rows="10">
                {note}
            </textarea><br />

            <button onClick={() => {
                let data = {
                    name,
                    address,
                    phone,
                    note
                }
                onSubmit(data)
            }}>Submit</button>

            <button onClick={() => {
                setName("");
                setAddress("");
                setPhone("");
                setNote("");
            }} >reset</button>
        </>
    )
}
