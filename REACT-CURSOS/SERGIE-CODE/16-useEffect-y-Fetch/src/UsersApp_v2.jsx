// https://jsonplaceholder.typicode.com/users
// vamos a usar useEffect
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { UsersList } from './UsersList';

export const UsersApp_v2 = () => {

    const [endPoint, setEndPoint] = useState('users')

    const handleFetch = () => {
        setEndPoint('comments')
    }

    return (
        <div>
            <h1>Users App</h1>

            <UsersList endPoint={endPoint}></UsersList>

            <button onClick={handleFetch}>
                Llamar a la API
            </button>
        </div>
    )
}