import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import {
  CommunityView,
  ListCommunities,
  ListCommunitiesResponse,
} from 'lemmy-js-client';
import { APIUtils } from '../../utils/APIUtils';
import { LemmyAPIMethods } from '../lemmy/types';

/** The RTK Query api for community related api calls */
export const communityApi = createApi({
  reducerPath: 'communitiesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://lemmy.ml/api/v3/',
  }),
  endpoints: builder => ({
    getCommunities: builder.query<CommunityView[], ListCommunities>({
      query: args => ({
        url: `community/list?${APIUtils.getQueryParamsFromObj(args)}`,
        method: LemmyAPIMethods.ListCommunities,
      }),
      transformResponse: (response: ListCommunitiesResponse) =>
        response.communities,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
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
