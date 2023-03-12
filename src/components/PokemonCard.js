import Ability from "./Ability";

const PokemonCard = ({
name,
image,
height,
weight,
abilities
}) => {
  return (
    <div className="w-72 p-2 m-2 shadow-lg bg-orange-200 rounded-lg">
      <h2 className="font-bold text-xl text-violet-600 text-center mb-3 underline decoration-1">{name.toUpperCase()}</h2>
      <img src={image} alt={name} />
      <h2 className="text-violet-600 text-center">Height is {height * 10} cm.</h2>
	    <h2 className="text-violet-600 text-center">Weight is {weight * 0.1} kg</h2>
      <h2 className="text-violet-600 text-center">{abilities.map((ability,index) => (
          <Ability key={index} {...ability} />
        ))}</h2>
    </div>
  );
};

export default PokemonCard;
