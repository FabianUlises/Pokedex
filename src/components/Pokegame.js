import React, { Component } from 'react';
import Pokedex from './Pokedex';
const Pokegame = () => {
    // Pokemon data
    const pokemon = [
        { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
        { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
        { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
        { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
        { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
        { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
        { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
        { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
    ]
    // Making an 2 arrays using pokemon data array.
    let hand1 = [];
    let hand2 = [ ...pokemon ];
    // 1. Looping though array hand1
    // 2. Getting random index from array
    // 3. Selecting and appending random array item to new array
    while(hand1.length < hand2.length) {
        let randInx = Math.floor(Math.random() * hand2.length);
        let randPokemon = hand2.splice(randInx, 1)[0];
        hand1.push(randPokemon);
    }
    return (   
        <div className='pokegame-container'>
            <Pokedex pokemon={hand1} />
            <Pokedex pokemon={hand2} />
        </div>
    );
}
export default Pokegame;