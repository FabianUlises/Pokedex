// Dependencies
import React from 'react';
// APIurl for pokemon image
const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/";
const Pokecard = (props) => {
    // Destructuring props
    const { name, exp, type, id } = props;
    // Creating url with id from props
    let imgSrc = `${POKE_API}${id}.png`;
    return (
        <div className='pokecard'>
            <h2>{name}</h2>
            <img src={imgSrc} alt={name} />
            <h5>Type: {type}</h5>
            <h5>EXP: {exp}</h5>
        </div>
    );
};

export default Pokecard;