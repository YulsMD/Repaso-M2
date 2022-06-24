import './App.css';
import React from 'react';
import NavBar from './components/NavBar'; //importa el componente NavBar
import { Route } from 'react-router-dom';
import Home from './components/Home';
import CreateUser from './components/CreateUser';
import Details from './components/Details';
import Users from './components/Users';

function App() {
  return (
    <React.Fragment> {/*Es como div, pero de React*/}
      
      {/*Para hacer funcionar esos NavLinks debemos configurar las rutas, aquí */}

      <NavBar/>{/*siempre se renderiza*/}
              
      {/*<Route path={'/home'} render={()=><Home name={'Yul'}
      age= {'25'} city={'Puebla'} />}/> esto es lo mismo que:*/}
      
      <Route path={'/home'}>
        <Home name={'Yul'} age= {'25'} city={'Puebla'} />
      </Route>
      <Route path={'/create'} component={CreateUser}/>
      
      {/*Con component no puedes pasar parámetros*/}
      <Route path={'/detail/:id'} component={Details}/>
      {/* cuando quiere pasar valores por parámetro debo 
      definirlo en la ruta y lo hago a través de :
      Lo que quiere decir que Details va a recibir esos valores */}

      <Route path={'/users'} component={Users}/>

    </React.Fragment>
  );
}

export default App;
