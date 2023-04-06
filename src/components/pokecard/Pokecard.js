// Dependencies
import React from 'react';

const Pokecard = (props) => {
    // Destructuring props
    const { name, exp, type } = props;
    return (
        <div className='pokecard'>
            <h2>{name}</h2>
            <h5>Type: {type}</h5>
            <h5>Exp: {exp}</h5>
        </div>
    );
};

export default Pokecard;