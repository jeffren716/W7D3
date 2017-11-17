
export const fetchAllPokemon = () => (
  $.ajax({
    url: "/api/pokemon",
    method: "GET"
  })
);


export const fetchOnePokemon = (pokemonId) => (
  $.ajax({
    url: `/api/pokemon/${pokemonId}`,
    method: "GET"
  })
);
