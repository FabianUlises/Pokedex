import React, { Components } from 'react';
import Pokecard from './Pokecard';
const Pokegame = () => (
    <div className='pokegame-container'>
        <h1>Pokegame</h1>
        <Pokecard id={1} name='Charmander' type='fire' exp={132} />
    </div>
)
export default Pokegame;