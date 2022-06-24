import React from "react";
import { Link } from "react-router-dom";

export default function User({name, lastName, age, city, id}){//recibe lo que le envía Users.jsx
    return(
        <div>
            <div>
                User number: {id}
            </div>
            Name: <Link to={`/detail/${id}`}>{name}</Link>
            {/*Para poder hacer uso de ese Link, debemos rutear en App */}
            <div>
                Last name: {lastName}
            </div>
            <div>
                Age: {age}
            </div>
            <div>
                City: {city}
            </div>
        </div>
        
    )
}