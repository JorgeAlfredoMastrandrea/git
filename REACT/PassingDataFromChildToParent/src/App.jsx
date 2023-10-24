// https://bobbyhadz.com/blog/react-pass-data-from-child-to-parent
// Passing data from child to parent component in ReactJS

/*
To pass data from a child to a parent component in React:

1- Pass a function as a prop to the Child component.
2- Call the function in the Child component and pass the data as arguments.
3- Access the data in the function in the Parent.

*/

import { useState } from 'react'
import './App.css'
import { Componente1 } from './Componente1'


function App() {
  const [count, setCount] = useState(0);

  const handleClick = num => {
    // 👇️ take the parameter passed from the Child component
    setCount(current => current + num);

    console.log('argument from Child: ', num);
  };


  return (
    <>
      <div>
        <Componente1 handleClick={handleClick} />
        <h2>Count: {count}</h2>
      </div>
    </>
  )
}

export default App
