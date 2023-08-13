import { FC } from 'react';
import { useGetPokemonQuery } from '../../services/pokemonsApi';
import './style.scss'

export interface PokemonItemProps {
  name: string,
  onSelect: (arg0: string) => void
}

export const PokemonItem: FC<PokemonItemProps> = ({ name, onSelect }) => {
  const { data: pokemonData, error: pokemonError, isLoading: pokemonLoading } = useGetPokemonQuery(name);

  if (pokemonLoading) {
    return <li>Loading {name}...</li>;
  }

  // if (pokemonError) {
  //   return <li>Error loading {name}: {pokemonError.message}</li>;
  // }

  return (
    <div className='pokemonCard' onClick={() => onSelect(name)}>
      <img
        src={pokemonData.sprites.front_default}
        alt={`${name} sprite`}
      />
      <h2 className="name">{name}</h2>
      <div className="types">
        {pokemonData.types.map((data:any) => (
          <div key={data.slot} className={`type ${data.type.name}`}>{data.type.name}</div>
        ))}
      </div>

    </div>
  );
}