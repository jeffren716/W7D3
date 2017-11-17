import { fetchAllPokemon } from '../util/api_util';
import { receiveAllPokemon, RECEIVE_ALL_POKEMON, requestAllPokemon, receiveOnePokemon, RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';



export const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ONE_POKEMON:
      return action.payload.items;
    default:
      return state;
  }
};
