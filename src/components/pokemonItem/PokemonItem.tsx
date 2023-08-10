import { FC } from 'react';
import { useGetPokemonQuery } from '../../services/pokemonsApi';

export interface PokemonItemProps {
  name: string,
  types: any[]
}

export const PokemonItem: FC<PokemonItemProps> = ({ name, types }) => {
  const { data: pokemonData, error: pokemonError, isLoading: pokemonLoading } = useGetPokemonQuery(name);

  if (pokemonLoading) {
    return <li>Loading {name}...</li>;
  }

  // if (pokemonError) {
  //   return <li>Error loading {name}: {pokemonError.message}</li>;
  // }

  return (
    <li>
      <h2>{name}</h2>
      <img
        src={pokemonData.sprites.front_default}
        alt={`${name} sprite`}
      />
      <h3>Types:</h3>
      <ul>
        {pokemonData.types.map((type:any) => (
          <li key={type.slot}>{type.type.name}</li>
        ))}
      </ul>
    </li>
  );
}