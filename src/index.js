import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import store from './components/store';
import {Provider} from 'react-redux'


ReactDOM.render(
  <Provider store = {store}> 
    <BrowserRouter> 
      <App /> 
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

//¿Voy a usar react-router? Sí ---> envuelvo mi App en Router.
//Definir quienes van a ser las rutas y qué se va a renderizar en cada ruta
    //2.1 App ---> <Route path:''>