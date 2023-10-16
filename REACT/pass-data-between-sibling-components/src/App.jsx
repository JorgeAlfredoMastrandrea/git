// https://dev.to/andydziabo/how-to-pass-data-between-sibling-components-in-react-2cjg

/*
How to pass data between sibling components in React

To tackle the challenge of passing data between sibling components, 
we are going to be looking at how data is passed between components in React. 
We use components to perform various functions that our application 
needs to be able to run as intended. First, lets start by defining what a component is:

For this example, we will be using function components. We'll start out with 4 components:
a parent component named App

A child of App named Search

Another child of App named Container

And a child of Container named Item!

Parent to Child
One way to get components to start talking to each other is using props. 
A parent component can pass an argument down to a child component as a prop. 
An example of this can be seen between the Container component and the Item component. 
Container fetches a list of data and stores it in the variable list. 
The array of list is then iterated through using the map() method. 
Each list item is then passed to the Item component using the prop named listItem. 
Item then takes the data passed through the prop listItem and uses it to display the information it contains. 
This alone does not solve our challenge because only the child component that the prop 
is passed to has access to that prop and any other sibling components will not. 
If we want to use the Search component to perform a search on the list that is held 
in the Container component, we will have to find a way to get data between the two. 
Since the sibling components cannot talk to each other, we will need to use the parent component as a go between.

Child to Parent
So a parent can send data to a child using a prop, but how can the child send data to the parent? 
A prop can also be used to send a function. If we use this feature to send a call back function to the child, 
we will then be able to use inverse data flow to get information back to the parent. 
To do this, we will set up new variable that uses State to update it.

const [query, setQuery] = useState();

We will then send setQuery to the Search component as a prop.

<Search onQuery={setQuery} />

Here is what it looks like added to the App component:

... continua en Search component...

With the search query data now in the App component, 
we can simply pass that data down to the Container component as a prop.

We have successfully passed data from sibling to sibling using the parent as a go between. 
The query data from the Search component is now available in the Container component and the query data can be used to do a search on the list array.

*/


import { useState, useEffect } from 'react'
import './App.css'
import { Container } from './componentes/Container';
import { Search } from './componentes/Search';


function App() {
  const [query , setQuery] = useState("");

  return (
    <>
      <div>
        <Search onQuery={setQuery}/>
        <Container query={query}/>        
      </div>
    </>
  )
}

export default App
