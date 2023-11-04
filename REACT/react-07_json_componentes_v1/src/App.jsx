// https://www.pluralsight.com/guides/how-to-render-a-component-dynamically-based-on-a-json-config

import './App.css'
import { RenderCard } from './componentes/RenderCard'
import "bootstrap/dist/css/bootstrap.min.css";

const CardConfig = [
  {
    component: "card",
    children: [
      {
        component: "img",
        src:
          "https://images.pexels.com/photos/2877188/pexels-photo-2877188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },

      {
        component: "body",
        children: [
          {
            component: "title",
            children: "This is a title"
          },
          {
            component: "title",
            children: "Manga de culiados"
          },
          {
            component: "subtitle",
            children: "This is the subtitle"
          },
          {
            component: "text",
            children:
              "Some quick example text to build on the card title and make up the bulk of the card's content."
          },
          {
            component: "button",
            children: "Click Me!"
          },
          {
            component: "body",
            children: [
              {
                component: "title",
                children: "Otro puto título"
              },
              {
                component: "title",
                children: "Otra Manga de culiados"
              },
              {
                component: "body",
                children: [
                  {
                    component: "title",
                    children: "Otro puto título"
                  },
                  {
                    component: "img",
                    src:
                      "https://images.pexels.com/photos/2877188/pexels-photo-2877188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

function App() {

  return (
    <>
      <div className="App">
        <div className="card-container">
          {CardConfig.map(config => RenderCard(config))}
        </div>
      </div>
    </>
  )
}

export default App
