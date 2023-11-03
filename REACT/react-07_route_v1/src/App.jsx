/*
Primero importaremos las funcionalidades que emplearemos: Routes y Route. 
A continuación, importaremos todos los componentes a los que necesitamos proporcionar una ruta. Ahora desglosaremos el proceso.

Routes actúa como contenedor padre de todas las rutas individuales que se crearán en nuestra aplicación.

Route se utiliza para crear una única ruta. Recibe dos atributos:

1-path, que especifica la ruta URL del componente deseado. 
Puedes llamar a esta ruta de la manera que quieras. 
Arriba, habrás notado que el primer nombre de ruta es una barra diagonal (/). 
Cualquier componente cuya nombre de ruta sea una barra diagonal se mostrará primero, 
siempre que la aplicación se cargue por vez primera. Esto implica que el componente Inicio será el primero en mostrarse.  

2-element, que especifica el componente que debe renderizar el enrutador.

------------------------

Usa Link para navegar a las rutas
Si has estado codificando hasta este punto sin ningún error, tu navegador debería estar mostrando el componente Inicio.

Ahora emplearemos una funcionalidad distinta de React Router para navegar a otras páginas con base en esas rutas 
y nombres de ruta que hemos creado en el componente Aplicacion. Esto es:  

ir al componente Inicio:


El componente Link es similar al elemento anchor (<a>) en HTML. Su atributo to especifica a qué ruta nos lleva el enlace.

Recuerda que hemos creado los nombres de ruta listados en el componente Aplicacion para que cuando hagas clic en el enlace, 
revise tus rutas y renderice el componente que corresponda a dicho nombre.

Recuerda que siempre debes importar Link desde react-router-dom antes de poder usarlo.

-----------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------

Por ejemplo, podrías emplear useNavigate para empujar a los usuarios a través de varias páginas, 
o podrías emplear useLocation para obtener la URL actual. De acuerdo, no empezaremos otro tutorial al final del artículo.

Puedes consultar más funcionalidades en la documentación de React Router.

*/


// https://blog.logrocket.com/how-create-multilevel-dropdown-menu-react/#implementing-routing

// menus :
// https://www.google.com/search?q=react+menu+submenu&oq=react+menu+and+sub&gs_lcrp=EgZjaHJvbWUqCAgBEAAYFhgeMgYIABBFGDkyCAgBEAAYFhgeMgYIAhBFGEDSAQg3MTE2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8


import './App.css';
import { Inicio } from './componentes/Inicio';
import { Contacto } from './componentes/Contacto';
import { SobreNosotros } from './componentes/SobreNosotros';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="sobre-nosotros" element={<SobreNosotros />} />
          <Route path="contacto" element={<Contacto />} />
        </Routes>
      </div>
    </>
  )
}

export default App
