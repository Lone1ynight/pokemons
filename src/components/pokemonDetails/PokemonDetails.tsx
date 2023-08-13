import { FC } from 'react';
import { useGetPokemonQuery } from '../../services/pokemonsApi';
import './style.scss'

export interface PokemonDetailsProps {
  name: string
}
export const PokemonDetails: FC<PokemonDetailsProps> = ({ name }) => {
  const { data: pokemonData, error: pokemonError, isLoading: pokemonLoading } = useGetPokemonQuery(name);

  if (pokemonLoading) {
    return <div>Loading details for {name}...</div>;
  }

  // if (pokemonError) {
  //   return <div>Error loading details for {name}: {pokemonError.message}</div>;
  // }

  return (
    <div className="details">
      <h2>{name} Details</h2>
      <ul>
        <li>Type: {pokemonData.types.map((data: any) => data.type.name).join(', ')}</li>
        <li>Attack: {pokemonData.stats[1].base_stat}</li>
        <li>Defense: {pokemonData.stats[2].base_stat}</li>
        <li>HP: {pokemonData.stats[0].base_stat}</li>
        <li>SP Attack: {pokemonData.stats[3].base_stat}</li>
        <li>SP Defense: {pokemonData.stats[4].base_stat}</li>
        <li>Speed: {pokemonData.stats[5].base_stat}</li>
        {/* Другие характеристики */}
      </ul>
    </div>
  );
}