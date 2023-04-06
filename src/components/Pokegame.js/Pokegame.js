// Dependencies
import React from 'react'
// Components
import Pokedex from '../pokedex/Pokedex';
// Mock data
import { pokemon } from './../../assets/Pokemondata';
const Pokegame = () => {
  return (
    <div className='game-container'>
        <Pokedex pokemon={pokemon} />
    </div>
  );
};

export default Pokegame;