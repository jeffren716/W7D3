import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { pokemonReducer } from './reducers/pokemon_reducer';
import configureStore from './store/store';
import { selectAllPokemon} from './reducers/selectors';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.pokemonReducer = pokemonReducer;
  window.selectAllPokemon = selectAllPokemon;
  const store = configureStore();
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;


  ReactDOM.render(<Root store={ store }/>, rootEl);
});
