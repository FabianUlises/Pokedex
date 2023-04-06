// Dependencies
import React from 'react'
// Components
import Pokecard from '../pokecard/Pokecard';
const Pokedex = (props) => {
  // Destructuring props
  const {pokemon} = props;
  // Looping through pokeman and createing pokecard component to display on dom
  const displayPokemon = pokemon.map((item) => (
  <Pokecard name={item.name} />
  ));
  return (
    <div>
      {displayPokemon}
    </div>
  );
};

export default Pokedex;