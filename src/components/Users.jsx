import React from "react";
import { connect } from "react-redux";
import { deleteUser } from "./actions";
import User from "./User";

//quiero concetarme al estado global
export function Users(props){

    //cuando aprieten el botón X
    //esta función va a permitir llegar al reducer
    //o sea a filtrar esta info
    //para eliminar el de la id correspondiente
    let handleClick = (e, id) =>{
        e.preventDefault();
        props.delete(id)
    }
    return(
        <div>
            {
                //quiero que se renderice otro componente: User.jsx
                props.users && props.users.map(u => <div>
                    {/*Cuando quiero renderizar componentes iguales
                    debo ponerles una key */}
                    <User 
                        key={u.id} 
                        id={u.id} 
                        name={u.name} 
                        lastName={u.lastName} 
                        age = {u.age} 
                        city={u.city}/>
                    <button onClick={(e)=>handleClick(e, u.id)}>X</button>
                <br/>
                <br/>

                </div>)
            }
        </div>
    )
}

function mapStateToProps(state){
    return{
        users: state.users
    }
}

function mapDispatchToProps(dispatch){
    return{
        delete: id => dispatch(deleteUser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
