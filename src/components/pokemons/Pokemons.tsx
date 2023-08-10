import {
  useState
} from 'react';
import {
  useGetAllPokemonsQuery,
  useGetPokemonTypesQuery
} from '../../services/pokemonsApi';
import { PokemonItem } from '../pokemonItem/PokemonItem';

export const Pokemons = () => {
  const [limit, setLimit] = useState<number>(12);
  const { data: allPokemonsData, error: allPokemonsError, isLoading: allPokemonsLoading, refetch } = useGetAllPokemonsQuery(limit);
  const { data: typesData, error: typesError, isLoading: typesLoading } = useGetPokemonTypesQuery();

  if (allPokemonsLoading || typesLoading) {
    return <p>Loading...</p>;
  }

  // if (allPokemonsError || typesError) {
  //   return <p>Error: {allPokemonsError?.message || typesError?.message}</p>;
  // }

  const types = typesData.results;

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {allPokemonsData.results.map((pokemon : any) => (
          <PokemonItem key={pokemon.name} name={pokemon.name} types={types} />
        ))}
      </ul>
      <button onClick={() => setLimit((prevState) => prevState+5)}>Load more</button>
    </div>
  );
}