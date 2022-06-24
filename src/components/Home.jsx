import React from "react";

//ESTE ES UN COMPONENTE DE CLASE

export default class Home extends React.Component{
    render(){ //render remplaza al return en un component de class
        let {name, age} = this.props; //haciendo destructuring de las props que me pasan en App
        return(
            <div>
                HOME {name} {age} {/*Así usas las variables */}
            </div>
        )
    }
}