import React from 'react';
import { Link, Route } from 'react-router-dom';
import Item from '../items/items';
import ItemDetailContainer from '../items/items_detail_container';

class PokemonDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestOnePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps){
    if (newProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.requestOnePokemon(newProps.match.params.pokemonId);
    }
  }

  render(){
    // debugger
    if (!this.props.pokemon) {
      return <div> Loading </div>;
    } else {

      return (
        <div>
          <img src={ this.props.pokemon.image_url }/>
          <h1> {this.props.pokemon.name}</h1>
          <h3> Type: {this.props.pokemon.poke_type}</h3>
          <h3> Attack: {this.props.pokemon.attack}</h3>
          <h3> Defense: {this.props.pokemon.defense}</h3>
          <h3> Moves: {this.props.pokemon.moves.join(",")}</h3>
          <ul>
            {
              this.props.items.map( item => (
              <Item item={item} key={item.name}/>
            )
              )
            }
          </ul>
          <Route path="/pokemon/:pokemonId/items/:itemId" component={ItemDetailContainer}/>
          </div>
      );
    }
    }


}

export default PokemonDetail;
