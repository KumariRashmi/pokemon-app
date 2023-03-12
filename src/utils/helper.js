export function filterData(searchText, pokemonList) {
  const filterData = pokemonList.filter((pokemon) =>
  pokemon?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  
  );
  const data= pokemonList.filter((pokemon) => pokemon?.abilities.forEach(element => {
    (element?.ability?.name.toLowerCase()?.includes(searchText.toLowerCase())) 
  }))

  return filterData|| data;
}
