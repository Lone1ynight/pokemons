import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_GITHUB_API }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUser: builder.mutation({
      query: (username) => ({
        url: `users/${username}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetUserMutation } = githubApi;