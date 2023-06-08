import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { ListCommunities, ListCommunitiesResponse } from 'lemmy-js-client';
import { APIUtils } from '../../utils/APIUtils';
import { LemmyAPIMethods } from '../lemmy/types';

/** The RTK Query api for community related api calls */
export const communityApi = createApi({
  reducerPath: 'communities',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://lemmy.ml/api/v3/',
  }),
  endpoints: builder => ({
    getCommunities: builder.query<ListCommunitiesResponse, ListCommunities>({
      query: args => ({
        url: `community/list?${APIUtils.getQueryParamsFromObj(args)}`,
        method: LemmyAPIMethods.ListCommunities,
      }),
    }),
  }),
});

// export const pokemonApi = createApi({
//   reducerPath: 'pokemonApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
//   endpoints: builder => ({
//     getPokemonByName: builder.query<string, string>({
//       query: name => `pokemon/${name}`,
//     }),
//   }),
// });
