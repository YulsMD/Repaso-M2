import React from "react";
import { connect,useDispatch, useSelector } from "react-redux";
import { getPost } from "./actions";

export function Details(props){ //los parametros vana llegar por props
    //puedes acceder a esa información por
    //props.match.params.id  esto lo puedes visualizar con DevTools React
    //useParams
    let params = props.match.params.id;
    // let paramsHook = React.useParams(); //devuelve un objeto

    //let dispatch = useDispatch(); //dispatch con hook
    //useSelector es para obtener estados globales
    //useState es para estados locales
    //equivalente a mapStateToProps---v
    //let detail = useSelector(state => state.detail); // props.detail
    //let users = useSelector(state=>state.users); // props.users

    React.useEffect(() => {
        //ni bien cargue la página vaya a la api
        //traiga la info y la cargue en detail
        props.getDetail(params)
    },[props,params]); //como dentro de esta función no tenemos definido
    //ni props, ni params, va a necesitar que le pasemos las dependencias
    //para que pueda observar en qué momento cambian
    return(
        <div>
            El usuario con id es: {params}
            {   //tienes un detail?: Sí, renderiza esto, no---> null
                props.detail ? (<div>
                    {props.detail.id} {/*Esta info viene de tu api */}
                    {props.detail.title}
                    {props.detail.body}
                </div>) : null
            }
        </div>
    )
}

//HAGAMOS TODO LO ANTERIOR PERO CON CONNECT
function mapStateToProps(state){
    return{
        detail: state.detail,
        users: state.users
    }
}

function mapDispatchToProps(dispatch){
    return{
        getDetail: id => dispatch(getPost(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Details)