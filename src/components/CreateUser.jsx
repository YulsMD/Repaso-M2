import React, { useState } from "react";
import { connect } from "react-redux";
import { createUser } from "./actions"; //importa las acciones

//FORM COMPLETO, en Notas importantes! 
//puedes encontrar la explicación de este código

//podría quedar
//export default function CreateUser({createUser}){ ***con destructuring***
//export default function CreateUser(props){ ***sin destructuring***
export function CreateUser({create}){ //con hook
    let [input, setInput]= React.useState({
        name:'', 
        lastName: '', 
        age:'', 
        city:''})
    
    let handleChange = (e) =>{
      e.preventDefault(); 
        setInput((prev)=>({
          ...prev,
        [e.target.name]: e.target.value}))
    }

    //cuando yo presione el submit quiero que esa info 
    //se guarde en el arreglo users que se encuentra en /reducer/index.js
    //para ello necesito la ayuda de dispatch
    
    //Este hook funciona como el connect, para poder hacer uso del dispatch
    //let dispatch = React.useDispatch();

    let handleSubmit = (e) =>{ 
      e.preventDefault();
      console.log(input); 
      //dispatch(createUser(input)); //le envías la info al dispatch con hook --- 
                                  //si es por medio de connect, también queda 
       create(input);             //así si usas destructuring
      //dispatch(props.createUser(input)); //sin destructuring
      setInput( {name:'', lastName:'', age:'', city:''});
    }
        
    return(
        <React.Fragment>
            <div>CREATE USER</div>
            <br/>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>Name</label>                 
                    <input type = {'text'} name={'name'} value={input.name}
                    onChange={(e) => handleChange(e)}/>
                </div>                                   
                <div>
                    <label>Last name</label>
                    <input type = {'text'} name={'lastName'} value={input.lastName}
                    onChange={(e) => handleChange(e)}/>
                </div>
                <div>
                    <label>Age</label>
                    <input type = {'text'} name={'age'} value={input.age}
                    onChange={(e) => handleChange(e)}/>
                </div>
                <div>
                    <label>City</label>
                    <input type = {'text'} name={'city'} value={input.city}
                    onChange={(e) => handleChange(e)}/>
                </div>
                <input type={'submit'} value = {'CREATE'}/>
            </form>
        </React.Fragment>
    )
}

//ahora recibimos el input como props, por ello o hacer destructuring en el
//parámetro que recibe la function CreateUser, veamos
//observa los ejemplos en la definición de la función CreateUser de este mismo archivo
function mapDispatchToProps(dispatch){
  return{
    create: (input) =>dispatch(createUser(input))
  }
}

//Sólo si estás en componentes funcionales puedes usar connect y useDispatch
//sino tienes que hacer uso del connect forzosamente
//connect(sólo si necesitas info del estado global, aquí va el dispatch)
export default connect(null, mapDispatchToProps)(CreateUser)