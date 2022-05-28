import React, { useState, useEffect } from 'react';
import Table from "../components/table";
import Form from "../components/form";
import { getNotes,newNote, deleteNote } from "../data/api";
import { Link } from "react-router-dom";

export default function Home() {
    const [list,setList] = useState([])
    const [isLogin,setIslogin] = useState(false)

    useEffect(() => {
        fetchData()

        let token = localStorage.getItem("token");
        if (token) {
            setIslogin(true)
        }
    },[])

    const fetchData = async () => {
        let res = await getNotes();
        setList(res.data)
    }

    const onSubmit = async (data) => {
        await newNote(data)
        fetchData()
    }

    const deleteItem = async (id) => {
        let res = await deleteNote(id);
        fetchData();
    }

    const logout = () => {
        localStorage.removeItem("token");
        window.location.reload()
    }

    return (
        <div>
            <h1>Guest notes</h1>
            <div style={{marginBottom: "20px"}}>
                {
                    isLogin ? 
                    <button onClick={logout}>Logout</button>
                    :
                    <Link to="/login">Login</Link>
                }
            </div>
            <div style={{marginBottom: "20px"}}>
                <Form onSubmit={onSubmit} />
            </div>
            <div>
                <Table headers={isLogin ? ['ID','Name','Note','phone','address','Action'] : ['ID','Name','Note']}>
                    {list.map((item,key) => {
                        return <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.note}</td>
                            {
                                isLogin ? 
                                <>
                                    <td>{item.phone}</td>
                                    <td>{item.address}</td>
                                    <td><button onClick={() => deleteItem(item.id)}>delete</button></td>
                                </>
                                :
                                null
                            }
                        </tr>
                    })}
                </Table>
            </div>
        </div>
    );
}