import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import {
  CommunityView,
  ListCommunities,
  ListCommunitiesResponse,
} from 'lemmy-js-client';
import { RootState } from '../../redux/store';
import { APIUtils } from '../../utils/APIUtils';
import { LemmyAPIMethods } from '../lemmy/types';
import {
  getCurrentInstance,
  getSettingsDefaultInstance,
} from '../settings/selectors';

export enum CommunityApiTagTypes {
  Community = 'Community',
}

const rawBaseQuery = fetchBaseQuery({
  baseUrl: 'https://lemmy.ml/api/v3',
});

const dynamicBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const defaultInstance = getSettingsDefaultInstance(
    api.getState() as RootState,
  );
  const currentInstance = getCurrentInstance(api.getState() as RootState);

  const newBaseUrlHost = currentInstance
    ? currentInstance.href
    : defaultInstance;

  const urlEnd = typeof args === 'string' ? args : args.url;
  const adjustedUrl = `${newBaseUrlHost}api/v3/${urlEnd}`;
  const adjustedArgs =
    typeof args === 'string' ? adjustedUrl : { ...args, url: adjustedUrl };

  // provide the amended url and other params to the raw base query
  return rawBaseQuery(adjustedArgs, api, extraOptions);
};

/** The RTK Query api for community related api calls */
export const communityApi = createApi({
  reducerPath: 'communitiesApi',
  tagTypes: [CommunityApiTagTypes.Community],
  baseQuery: dynamicBaseQuery,
  endpoints: builder => ({
    getCommunities: builder.query<CommunityView[], ListCommunities>({
      query: args => ({
        url: `community/list?${APIUtils.getQueryParamsFromObj(args)}`,
        method: LemmyAPIMethods.ListCommunities,
        timeout: 5000,
      }),
      providesTags: [CommunityApiTagTypes.Community],
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

export const { useGetCommunitiesQuery } = communityApi;
