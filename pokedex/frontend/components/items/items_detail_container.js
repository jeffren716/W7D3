import { connect } from 'react-redux';
import ItemDetail from './item_details';
import { receiveAllPokemon, requestOnePokemon } from '../../actions/pokemon_actions';
import { selectItem } from '../../reducers/selectors.js';

const mapStateToProps = (state, ownProps) => {
  return {
    item: selectItem(state, ownProps.match.params.itemId)
  };
};


export default connect(mapStateToProps)(ItemDetail);
