//Aquí generamos nuestro reducer

//el id que le pasas al key en Users.jsx debe ser definido en algún lado, 
//por ejemplo aquí
let index = 1; 

const initialState ={ //declaremos nuestro estado inicial
    users:[],
    detail:{}
}

//state siempre debe inicializarse
export default function rootReducer(state = initialState,action){ 
    switch(action.type){//este type, es la propiedad de la action que definimos en actions/index.js
        case 'CREATE_USER':
            return{
                ...state, //primero copia el estado
                users: [...state.users, {...action.payload, id: index++}]
                //también se puede:
                //users: state.users.concat(action.payload)
                //users termina siendo [{},{},{}]

                //{...action.payload, id: index++}
                //has una copia de lo que teníamos hasta ahora, e incrementa index.
            }
        case 'SET_DETAIL':
            return{
                ...state,
                detail: action.payload
            }
        case 'DELETE_USER':
            return{
                ...state,
                users: state.users.filter(u => u.id !== action.payload)
            }
        default:
            return {...state}
    }
}