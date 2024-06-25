import React, { Component } from 'react';
import Pokecard from './Pokecard';
const Pokedex = (props) => {
    return (
        <div>
            <Pokecard name={props.name}/>
        </div>
    );
}
export default Pokedex;