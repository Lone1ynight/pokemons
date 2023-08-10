import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonsApi = createApi({
  reducerPath: 'pokemonsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_POKEMONS_API }),
  tagTypes: [''],
  endpoints: (builder) => ({
    getAllPokemons: builder.query<any, number>({
      // query: () => 'pokemon',

      async queryFn(_arg, _queryApi, _extraOptions, fetch) {
        try {
          const result = await fetch(`pokemon?limit=${_arg}`);

          console.log(result.data);
          return {data: result.data};
        } catch (e) {
          console.log(e);
          return {data: null};
        }
      },
    }),
    // fetchAllItems: builder.query({
    //   async queryFn(_arg, _queryApi, _extraOptions, fetch) {
    //     try {
    //       const result = await fetch(`pokemon?_limit=${_arg}`);
    //
    //       console.log(result.data);
    //       return {data: result.data};
    //     } catch (e) {
    //       console.log(e);
    //       return {data: null};
    //     }
    //   },
    //   // providesTags: () => ['Devs']
    // }),
    getPokemonTypes: builder.query<any, void>({
      query: () => 'type',
    }),
    getPokemon: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemonsByType: builder.query({
      query: (typeName) => `type/${typeName}`,
    }),
  }),
});

export const { useGetAllPokemonsQuery,
  useGetPokemonTypesQuery,
  useGetPokemonQuery,
  useGetPokemonsByTypeQuery, } = pokemonsApi;