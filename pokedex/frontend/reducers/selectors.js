import values from 'lodash/values';

export const selectAllPokemon = (state) => {
  let pokemon = state.entities.pokemon;
  return values(pokemon);
};

export const selectAllItems = (state) => {
  let items = state.entities.items;
  return values(items);
};

export const selectUI= (state) => {
  let ui = state.ui;
  return values(ui);
};

export const selectItem= (state,itemId) => {
  let item;

  state.entities.items.forEach((el) => {
    if (el.id === parseInt(itemId)) {
      item =  el;
    }
  });

  return item;
};
