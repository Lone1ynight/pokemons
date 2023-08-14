import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetAllPokemons } from '../types/pokemons';

export const pokemonsApi = createApi({
  reducerPath: 'pokemonsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_POKEMONS_API }),
  tagTypes: [''],
  endpoints: (builder) => ({
    getAllPokemons: builder.query<GetAllPokemons, number>({
      async queryFn(_arg, _queryApi, _extraOptions, fetch) {
        try {
          const result = await fetch(`pokemon?limit=${_arg}`);
          return {data: result.data as GetAllPokemons};
        } catch (e) {
          console.log(e);
          return {data: { count: 0, next: '', previous: null, results: [] }};
        }
      },
    }),
    getPokemon: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetAllPokemonsQuery, useGetPokemonQuery } = pokemonsApi;