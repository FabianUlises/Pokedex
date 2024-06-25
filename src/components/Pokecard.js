import React, { Component } from 'react';
const Pokecard = (props) => {
    return(
        <div id={props.id}>
            <p>{props.exp}</p>
            <h4>{props.name}d</h4>
            <p>{props.type}</p>
        </div>
    )
}
export default Pokecard;