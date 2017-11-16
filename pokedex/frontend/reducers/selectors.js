import values from 'lodash/values';

export const selectAllPokemon = (state) => {
  let pokemon = state.entities.pokemon;
  return values(pokemon);
};
