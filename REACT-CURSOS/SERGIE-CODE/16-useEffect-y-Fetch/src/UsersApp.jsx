// https://jsonplaceholder.typicode.com/users
// vamos a usar useEffect


import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export const UsersApp = () => {

    const [users, setUsers] = useState([]);

    const fetchUsers = async() => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json();
            setUsers(data);
        }catch(error){
            console.log(error)
        }
    }

    // useEffect( () => {} , []) // necesita de una callback '() => {}' y de un array..
    // hacemos esto al comienzo del componente para que lo haga una vez solamente
    useEffect( () => {
        fetchUsers()
    },[]
    )



    return (
        <div>
            <h1>Users App</h1>

            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>           
        </div>
    )
}
