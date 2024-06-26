import React, { Component } from 'react';
import Pokecard from './Pokecard';
const Pokedex = (props) => {
    return (
        <div className={`${props.dex === 1 ? 'pokedex-1' : 'pokedex-2'} pokedex-container`}>
            <h2 className="pokedex-title">Pokedex</h2>
            {props.isWinner ? <div className={`${props.isWinner ? 'green-text' : ''} game-result`}>Winner!</div> : <div className={`${props.isWinner ? '' : 'red-text'} game-result`}>Loser!</div>}
            <div className="pokedex-exp">
                {props.exp}
            </div>
            <div className="pokedex-content">
                {props.pokemon.map((p) => ( 
                    <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                ))}
            </div>
        </div>
    );
}
export default Pokedex;