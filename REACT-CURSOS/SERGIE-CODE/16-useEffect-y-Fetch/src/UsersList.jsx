import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export const UsersList = ({ endPoint }) => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
        fetchData()
    } , [endPoint])

    return (
        <>
            <ul>
                {endPoint == 'users'    ?   data.map(item => <li key={item.id}>{item.name}</li>) 
                                        :   data.map(item => <li key={item.id}>{item.name}</li>)
                }
            </ul>
        </>
    )
}
