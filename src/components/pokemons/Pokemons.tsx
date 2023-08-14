import {
  useState
} from 'react';
import {
  useGetAllPokemonsQuery
} from '../../services/pokemonsApi';
import { Pokemon } from '../../types/pokemons';
import { PokemonDetails } from '../pokemonDetails/PokemonDetails';
import { PokemonItem } from '../pokemonItem/PokemonItem';
import './style.scss'

export const Pokemons = () => {
  const [limit, setLimit] = useState<number>(12);
  const { data: allPokemonsData, error: allPokemonsError, isLoading: allPokemonsLoading } = useGetAllPokemonsQuery(limit);

  const [selectedPokemon, setSelectedPokemon] = useState<null | string>(null);

  if (allPokemonsLoading) {
    return <p>Loading...</p>;
  }

  const handlePokemonSelect = (name: string) => {
    setSelectedPokemon(selectedPokemon === name ? null : name)
  };

  return (
    <div className="pokemonsWrapper">
      <div className="pokemons">
        {allPokemonsData && allPokemonsData.results.map((pokemon: Pokemon) => (
          <PokemonItem key={pokemon.name} name={pokemon.name} onSelect={() => handlePokemonSelect(pokemon.name)}/>
        ))}
        {allPokemonsError && <h3>Error. Something went wrong</h3>}
        {selectedPokemon && <PokemonDetails name={selectedPokemon} />}
      </div>
      <div className="buttonWrapper"><button onClick={() => setLimit((prevState) => prevState+11)} className="button">Load more</button></div>
    </div>
  );
}