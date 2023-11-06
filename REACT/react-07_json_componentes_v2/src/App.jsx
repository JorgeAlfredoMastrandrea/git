
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
            src: [
              [
                ["Year", "Sales", "Expenses", "Profit"],
                ["2014", 1000, 400, 200],
                ["2015", 1170, 460, 250],
                ["2016", 660, 1120, 300],
                ["2017", 1030, 540, 350],
              ],
              {
                title: "Company Performance",
                subtitle: "Sales, Expenses, and Profit: 2014-2017",
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
