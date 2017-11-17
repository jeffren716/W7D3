import React from 'react';
import { NavLink, Link } from 'react-router-dom';


function PokemonIndexItem(props){
  return (
      <li className="pokemon-list-item">
        <Link to={`/pokemon/${props.pokemon.id}`}>
        <img src={ props.pokemon.image_url }/>
        { props.pokemon.name }
      </Link>
      </li>
  );
}

export default PokemonIndexItem;
