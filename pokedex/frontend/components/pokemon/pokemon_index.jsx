import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return(
      <div>
        <ul>{
          this.props.pokemon.map( (pokeman) => (
            <li key={ pokeman.name }><img src={ pokeman.image_url }/>{ pokeman.name }</li>
          ))
          }
        </ul>
      </div>
    );
  }

}

export default PokemonIndex;
