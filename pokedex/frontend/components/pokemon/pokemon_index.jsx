import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return(
      <div>
        <ul>{
          this.props.pokemon.map( (pokeman) => (
            <PokemonIndexItem key={pokeman.id} pokemon={pokeman} />
          ))
          }
        </ul>
          <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
      </div>

    );
  }

}

export default PokemonIndex;
