import { fetchAllPokemon } from '../util/api_util';
import { receiveAllPokemon, RECEIVE_ALL_POKEMON, requestAllPokemon } from '../actions/pokemon_actions';
import merge from 'lodash/merge';


export const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      newState = merge({},action.pokemon);
      return newState;
    default:
      return state;
  }
};
