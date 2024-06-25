import React, { Component } from 'react';
const Pokecard = (props) => {
    return(
        <div>
            <p>{props.exp}</p>
            <h4>{props.name}</h4>
            <p>{props.type}</p>
        </div>
    )
}
export default Pokecard;