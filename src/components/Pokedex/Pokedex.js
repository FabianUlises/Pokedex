// Dependencies
import React from 'react'
// Components
import Pokecard from '../pokecard/Pokecard';
const Pokedex = (props) => {
  // Destructuring props
  const { pokemon, exp, isWinner } = props;
  // Looping through pokeman and createing pokecard component to display on dom
  const displayPokemon = pokemon.map((item, i) => (
  <Pokecard name={item.name} type={item.type} exp={item.base_experience} key={i} />
  ));
  // Creating message to display whether winner or loser
  let msg;
  msg = isWinner ? 'You Are The Winner! 😄' : 'you lose 😾';
  return (
    <div className='pokedex'>
      <h2 className='pokedex__title'>Pokedex</h2>
      <p>Total Experience: {exp}</p>
      <p className={isWinner ? 'game-winner' : 'game-loser'}>{msg}</p>
      <div className='pokedex-cards'>
        {displayPokemon}
      </div>
    </div>
  );
};

export default Pokedex;