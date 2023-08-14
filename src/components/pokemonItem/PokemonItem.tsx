import { FC } from 'react';
import { useGetPokemonQuery } from '../../services/pokemonsApi';
import './style.scss'
import { Type } from '../../types/pokemons';

export interface PokemonItemProps {
  name: string,
  onSelect: (arg0: string) => void
}

export const PokemonItem: FC<PokemonItemProps> = ({ name, onSelect }) => {
  const { data: pokemonData, isLoading: pokemonLoading } = useGetPokemonQuery(name);

  if (pokemonLoading) {
    return <li>Loading {name}...</li>;
  }

  return (
    <div className='pokemonCard' onClick={() => onSelect(name)}>
      <img
        src={pokemonData.sprites.front_default}
        alt={`${name} sprite`}
      />
      <h2 className="name">{name}</h2>
      <div className="types">
        {pokemonData.types.map((data: Type) => (
          <div key={data.slot} className={`type ${data.type.name}`}>{data.type.name}</div>
        ))}
      </div>
    </div>
  );
}