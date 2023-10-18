// React- Communication between two sibling Components using react Hooks.
// https://eduandabhi.medium.com/react-communication-between-two-sibling-components-using-react-hooks-5835ea3c3d9f
// In this article, I will show you how you can communicate between two siblings components using react hooks.

/*
Here as shown in image 2 we will pass our message from child1 to the parent then update the message in child2.
So let’s start:-

Suppose we have a parent component called app.js which has two child components name Child1 and child2.
Our parent app.js code looks like.

..continua en Child1..
*/

import './App.css'
import { useState } from 'react'
import { Child1 } from './componentes/Child1'
import { Child2 } from './componentes/Child2'

function App() {

  // Here we create the initial state and set the message empty:-
  const [selectedMessage, setMessage] = useState('mensaje vacío (esto está en App, podría no haber nada)');

  return (
    <>
      <div className="app">
        <p>Esta es App</p>
        <Child1 setMessage={setMessage} />
        <Child2 selectedMessage={selectedMessage} />
      </div>
    </>
  )
}

export default App
