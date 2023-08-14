import { FC } from 'react';
import { useGetPokemonQuery } from '../../services/pokemonsApi';
import './style.scss'
import {
  Stat,
  Type
} from '../../types/pokemons';

export interface PokemonDetailsProps {
  name: string
}
export const PokemonDetails: FC<PokemonDetailsProps> = ({ name }) => {
  const { data: pokemonData, isLoading: pokemonLoading } = useGetPokemonQuery(name);

  if (pokemonLoading) {
    return <div>Loading details for {name}...</div>;
  }

  return (
    <div className="details">
      <img
        src={pokemonData.sprites.front_default}
        alt={`${name} sprite`}
        className="details__child"
      />
      <h2>{name} Details #{pokemonData.id}</h2>
      <table className="details__child">
        <tbody>
        <tr>
          <td>Type</td>
          <td>
            {pokemonData.types.map((data: Type) => data.type.name).join(", ")}
          </td>
        </tr>
        {
          pokemonData.stats.map((item: Stat) => (<tr key={item.stat.name}>
              <td>{item.stat.name}</td>
              <td>{item.base_stat}</td>
            </tr>)
          )
        }
        <tr>
          <td>weight</td>
          <td>
            {pokemonData.weight}
          </td>
        </tr>
        <tr>
          <td>total-moves</td>
          <td>
            {pokemonData.moves.length}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}