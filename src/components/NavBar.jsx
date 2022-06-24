import React from "react"; //debes importar React
import { NavLink } from "react-router-dom";

//ESTE ES UN COMPONENTE FUNCIONAL

export default function NavBar(){
    return(
        <React.Fragment>
            {/*React.Fragment, es un componente que diseñó React, 
            para no estar envolviendo todo en tags de HTML */}
            <nav> {/*representa una sección de una página cuyo propósito 
                    es proporcionar enlaces de navegación */}
                <ul>
                    <li>
                        <NavLink to = {'/home'}>Home</NavLink> {/*NavLink: puedes darle estilos cuando esté activo
                                                   Link no puede tener estilos */}
                    </li>
                    <li>
                        <NavLink to = {'/users'} >Users</NavLink>
                        {/*Esto únicamente es para cambiar la URL */}
                    </li>
                    <li>
                        <NavLink to = {'/create'}>Create Users</NavLink>
                    </li>
                    <li>
                        <NavLink to = {'/about'}>About</NavLink>
                    </li>
                </ul>
            </nav>
        </React.Fragment> 
        
        
    )
}
