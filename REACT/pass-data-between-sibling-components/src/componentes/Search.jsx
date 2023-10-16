import React from 'react'

/*
...viene de App.jsx...

Next we look at the Search component. We accept the prop and deconstruct it.

function Search({ onQuery })

Now instead of simply doing a console log of the search entry, we can pass the search query back to the App component.

onQuery(e.target.value);

*/


export const Search = (onQuery) => {
  function handleInput(e){
    console.log(e.target.value);
  }
  return (
    <div className="search">
      <input type="text" onInput={handleInput}/>
    </div>
  )
}
