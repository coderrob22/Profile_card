import React from "react";

export default function Avatar(props) {
    return(
        <img className="avatar" src={props.image} alt={props.alt}/>
    )
}