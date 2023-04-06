// Dependencies
import React from 'react';

const Pokecard = (props) => {
    // Destructuring props
    const {name} = props;
    return (
        <div className='pokecard'>
            <h2>{name}</h2>
            <h5>Type: </h5>
            <h5>Exp: </h5>
        </div>
    );
};

export default Pokecard;