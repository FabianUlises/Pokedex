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
    return (
    <div className='game-container'>
        <Pokedex pokemon={hand1} />
        <Pokedex pokemon={hand2} />
    </div>
  );
};

export default Pokegame;