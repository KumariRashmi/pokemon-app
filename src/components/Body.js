import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import PokemonCard from "./PokemonCard";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { filterData } from "../utils/helper";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/pokemonSlice";
import { clearCart } from "../utils/pokemonSlice";



const Body = () => {
const [allPokemons, setAllPokemons] = useState([]);
const [filteredPokemons, setFilteredPokemons] = useState([]);
const [searchText, setSearchText] = useState("");
const [loadPoke, setLoadPoke] = useState(
	"https://pokeapi.co/api/v2/pokemon?limit=50"
);
const dispatch = useDispatch();

const getAllPokemons = async () => {
	const res = await fetch(loadPoke);
	const data = await res.json();
	setLoadPoke(data.next);

	const createPokemonObject=(result) =>{
  dispatch(clearCart());
	result.forEach(async (pokemon) => {
		const res = await fetch(
		`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
		);
		const data = await res.json();
    dispatch(addItem(data));
		setAllPokemons((currentList) => [...currentList, data]);
    setFilteredPokemons((currentList) => [...currentList, data]);
  

	});
	}
	createPokemonObject(data.results);
	await console.log(allPokemons);
};
  useEffect(() => {
    getAllPokemons();
  }, []);

// Pagination code..//
const [pageNumber,setPageNumber] = useState(0);
const usersPerPage = 10;
const pagesVisited = pageNumber * usersPerPage;
const displayPokemans = filteredPokemons.slice(pagesVisited, pagesVisited + usersPerPage)
const pageCount = Math.ceil(filteredPokemons.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
 
// Pagination code..//

//Sorting Logic..//
const [sortField, setSortField] = useState("name");
const [order, setOrder] = useState("asc");
const handleSortingChange = (accessor) => {
  const sortOrder =
   accessor === sortField && order === "asc" ? "desc" : "asc";
  setSortField(accessor);
  setOrder(sortOrder);
  handleSorting(accessor, sortOrder);
 };
 const handleSorting = (sortField, sortOrder) => {
  if (sortField) {
   const sorted = [...displayPokemans].sort((a, b) => {
    return (
     a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
      numeric: true,
     }) * (sortOrder === "asc" ? 1 : -1)
    );
   });
   setFilteredPokemons(sorted);
  }
 };
//Sorting Logic..//

  if (!allPokemons) return null;

  return allPokemons?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-orange-200 my-5">
        <input
          data-testid="search-input"
          type="text"
          className="focus:bg-green-200 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          data-testid="search-btn"
          className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allPokemons);
            // update the state
            setFilteredPokemons(data);
          }}
        >
          Search
        </button>  
        <button
          className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
          onClick={() => 
            handleSortingChange('name')
           }
        >
          SORT BY NAME
        </button>
        <button
          className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
          onClick={() => 
            handleSortingChange('weight')
           }
        >
          SORT BY WEIGHT
        </button>
        <button
          className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
          onClick={() => 
            handleSortingChange('height')
           }
        >
          SORT BY HEIGHT
        </button>
      </div>

  {displayPokemans?.length !== 0 ? <div className="flex flex-wrap " data-testid="res-list">
		{displayPokemans.map((pokemon, index) => (
			<Link
      to={"/pokemanDetails/" + pokemon.name}
      key={index}
    >
      <PokemonCard 
      id={pokemon.id}
			name={pokemon.name}
			image={pokemon.sprites.other.dream_world.front_default}
			type={pokemon.types[0].type.name}
			key={index}
			height={pokemon.height}
			weight={pokemon.weight} 
      abilities={pokemon.abilities}/>
    </Link>
		))}
		</div> : <h2 className="font-bold text-xl">NO RESULTS FOUND FOR ENTERED SEARCH ITEM.PLEASE TRY AGAIN</h2> }
    <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </>
    
  );
};

export default Body;
