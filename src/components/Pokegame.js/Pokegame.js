// Dependencies
import React from 'react'
// Components
import Pokedex from '../pokedex/Pokedex';
// Mock data
import { pokemon } from './../../assets/Pokemondata';
const Pokegame = () => {
    // Creating two arrays from data to get two different decks of cards
    let hand1 = [];
    let hand2 = [...pokemon];
    // Adding pokemon data to hand2 array so they can be an even amount
    while(hand1.length < hand2.length) {
        // Creatng random index to get pokemon from array
        let randInd = Math.floor(Math.random() * hand2.length);
        // Selecting random pokemon from array using random index created
        let randPokemon = hand2.splice(randInd, 1)[0];
        // Pushing random pokemon to hand1 array
        hand1.push(randPokemon);
    }
    // Calculating ave experience for each pokedex
    const exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    const exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    return (
    <div className='game-container'>
        <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
    </div>
  );
};

export default Pokegame;