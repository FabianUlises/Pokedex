import React, { Component } from 'react';
import Pokecard from './Pokecard';
const Pokedex = (props) => {
    return (
        <div className="pokedex-container">
            <h2 className="pokedex-title">Pokedex</h2>
            {props.pokemon.map((p) => ( 
                <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
            ))}
        </div>
    );
}
export default Pokedex;