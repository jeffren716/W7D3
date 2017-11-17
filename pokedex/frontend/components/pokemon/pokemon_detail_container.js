import { connect } from 'react-redux';
import { selectAllPokemon, selectAllItems, selectUI } from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';
import { receiveAllPokemon, requestOnePokemon } from '../../actions/pokemon_actions';



const mapStateToProps = (state) => {
  return {
  pokemon: state.entities.pokemon[state.ui.pokeDisplay],
  items: selectAllItems(state),
};
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestOnePokemon: (id) => (dispatch(requestOnePokemon(id)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
