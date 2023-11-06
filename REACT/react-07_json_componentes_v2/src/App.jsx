
import './App.css'
import { RenderizarComponentes } from './componentes/RenderizarComponentes'
import "bootstrap/dist/css/bootstrap.min.css";

const ContentConfig = [
  {
    component: "fila",
    children: [

      {
        component: "columna",
        children: [
          {
            component: "párrafo",
            children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, accusamus, nulla id unde aperiam officia quibusdam possimus commodi reiciendis eligendi nobis porro libero enim soluta consequatur accusantium, cumque rem est!"
          },
        ]
      },
      {
        component: "columna",
        children: [
          {
            component: "barras",
            children: [
              {
                component: "barras_data",
                children: "los datos de las barras"
              },
              {
                component: "barras_options",
                children: "las opciones de las barras"
              },
            ],
          },
        ],
      },
    ],
  },


  {
    component: "párrafo",
    children: "Este es el párrafo de abajo"
  },

];

function App() {
  return (
    <>
      <div className="container">
        {ContentConfig.map(config => RenderizarComponentes(config))}
      </div>
    </>
  )
}

export default App
