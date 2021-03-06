import { fetchAllPokemon } from '../util/api_util';
import { receiveAllPokemon, RECEIVE_ALL_POKEMON, requestAllPokemon, receiveOnePokemon, RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';


export const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      newState = merge({},state,action.pokemon);
      return newState;
    case RECEIVE_ONE_POKEMON:
      newState = merge({}, state, {[action.payload.pokemon.id]: action.payload.pokemon});
      return newState;
    default:
      return state;
  }
};
