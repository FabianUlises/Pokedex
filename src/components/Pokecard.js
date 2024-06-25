import React, { Component } from 'react';
const Pokecard = (props) => {
    // URL for pokemon img
    const pokeApiURL= `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;
    // If id is less than 3 digits appending two 0 to the start. API img must be in 3 digits
    let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
    const imgSrc = `${pokeApiURL}${padToThree(props.id)}.png`;
    console.log(imgSrc)
    return(
        <div key={props.id}>
            <img src={imgSrc} alt={props.name} />
            <p>{props.exp}</p>
            <h4>{props.name}</h4>
            <p>{props.type}</p>
        </div>
    )
}
export default Pokecard;