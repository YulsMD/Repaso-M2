export function createUser(info){ //este parametro lo envía el dispatch de CreateUser.jsx
    //la acción es un objeto que tiene como carcaterística fundamental:
    return {type: 'CREATE_USER', payload: info}
}

//la siguiente funcion se relaciona con detail
//lo ejecuta el useEffect que definimos en Details.jsx

export function getPost(id){ //esto es un middleware, 
    //en las notas tienes el comportamiento de la app cuando hay un middleware
    return function(dispatch){
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(post =>dispatch({type: 'SET_DETAIL', payload: post}))
    }
}

//Esta se relaciona con User.jsx para eliminar un usuario
export function deleteUser(id){
    return {type:'DELETE_USER', payload: id}
}