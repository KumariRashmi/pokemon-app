import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PokemonDetail = () => {
const { name } = useParams();
const pokemonItems = useSelector((store) => store.pokemon.items);
const selectedPokemon = pokemonItems.filter((pokemon) =>
pokemon?.name?.toLowerCase()?.includes(name.toLowerCase())
)
  return (
        <div className="w-96 p-2 m-2 shadow-lg bg-orange-200 rounded-lg">
        <>
        <div className="flex"><h2 className="font-bold">Name :: </h2>{selectedPokemon[0].name}</div>
        <div className="flex"><h2 className="font-bold">ID :: </h2>{selectedPokemon[0].id}</div>

        <div className="flex"><h2 className="font-bold">base_experience :: </h2>{selectedPokemon[0].base_experience}</div>
        <div className="flex"><h2 className="font-bold">height :: </h2>{selectedPokemon[0].height}</div>
        <div className="flex"><h2 className="font-bold">Ability URL :: </h2></div>{selectedPokemon[0].abilities.map((element) => (
           <>
          <div className="flex"> <h2 className="font-bold">Name :: </h2>{element.ability.name}</div>
          <div className="flex"> <h2 className="font-bold">Url :: </h2>{element.ability.url}</div>
          <div className="flex"> <h2 className="font-bold">Is_Hidden :: </h2>{element.ability.name}</div>
          <div className="flex"> <h2 className="font-bold">Slot :: </h2>{element.ability.name}</div>
          </>
        ))}
        <div className="flex"><h2 className="font-bold">weight :: </h2>{selectedPokemon[0].weight}</div>
        </>
        </div>
  );
};

export default PokemonDetail;
