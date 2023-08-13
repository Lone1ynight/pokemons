import {
  useState
} from 'react';
import {
  useGetAllPokemonsQuery,
  useGetPokemonTypesQuery
} from '../../services/pokemonsApi';
import { PokemonDetails } from '../pokemonDetails/PokemonDetails';
import { PokemonItem } from '../pokemonItem/PokemonItem';
import './style.scss'

export const Pokemons = () => {
  const [limit, setLimit] = useState<number>(12);
  const { data: allPokemonsData, error: allPokemonsError, isLoading: allPokemonsLoading, refetch } = useGetAllPokemonsQuery(limit);
  const { data: typesData, error: typesError, isLoading: typesLoading } = useGetPokemonTypesQuery();

  const [selectedPokemon, setSelectedPokemon] = useState<null | string>(null);


  if (allPokemonsLoading) {
    return <p>Loading...</p>;
  }

  const handlePokemonSelect = (name: string) => {
    setSelectedPokemon(selectedPokemon === name ? null : name)
  };

  // if (allPokemonsError || typesError) {
  //   return <p>Error: {allPokemonsError?.message || typesError?.message}</p>;
  // }

  return (
    <div className="pokemonsWrapper">
      <div className="pokemons">
        {allPokemonsData.results.map((pokemon : any) => (
          <PokemonItem key={pokemon.name} name={pokemon.name} onSelect={() => handlePokemonSelect(pokemon.name)}/>
        ))}
        {selectedPokemon && <PokemonDetails name={selectedPokemon} />}
      </div>
      <div className="buttonWrapper"><button onClick={() => setLimit((prevState) => prevState+11)} className="button">Load more</button></div>
    </div>
  );
}