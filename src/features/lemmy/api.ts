import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import {
  CommunityView,
  GetPosts,
  GetPostsResponse,
  ListCommunities,
  ListCommunitiesResponse,
  PostView,
} from 'lemmy-js-client';
import { RootState } from '../../redux/store';
import { DEFAULT_API_TIMEOUT } from '../../types';
import { APIUtils } from '../../utils/APIUtils';
import {
  getCurrentInstance,
  getSettingsDefaultInstance,
} from '../settings/selectors';
import { LemmyAPIMethods, LemmyAPIPaths } from './types';

export enum LemmyApiTagTypes {
  Community = 'Community',
  Posts = 'Posts',
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
export const lemmyApi = createApi({
  reducerPath: 'lemmyApi',
  tagTypes: [LemmyApiTagTypes.Community, LemmyApiTagTypes.Posts],
  baseQuery: dynamicBaseQuery,
  endpoints: builder => ({
    getCommunities: builder.query<CommunityView[], ListCommunities>({
      query: args => ({
        url: `${LemmyAPIPaths.ListCommunities}?${APIUtils.getQueryParamsFromObj(
          args,
        )}`,
        method: LemmyAPIMethods.ListCommunities,
        timeout: DEFAULT_API_TIMEOUT,
      }),
      providesTags: [LemmyApiTagTypes.Community],
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
    getPosts: builder.query<PostView[], GetPosts>({
      query: args => ({
        url: `${LemmyAPIPaths.GetPosts}?${APIUtils.getQueryParamsFromObj(
          args,
        )}`,
        method: LemmyAPIMethods.GetPosts,
        timeout: DEFAULT_API_TIMEOUT,
      }),
      providesTags: [LemmyApiTagTypes.Posts],
      transformResponse: (response: GetPostsResponse) => response.posts,
      // serializeQueryArgs: ({ endpointName }) => {
      //   return endpointName;
      // },
      // // Always merge incoming data to the cache entry
      // merge: (currentCache, newItems, otherArgs) => {
      //   console.log('=== merge: ', otherArgs.arg);
      //   if (otherArgs.arg.page === 1) {
      //     console.log('\tcurrentCache items: ' + currentCache.length);
      //     console.log('\nnewItems: ' + newItems.length);
      //     currentCache = newItems;
      //   } else {
      //     currentCache.push(...newItems);
      //   }
      // },
      // // Refetch when the page arg changes
      // forceRefetch({ currentArg, previousArg }) {
      //   console.log(
      //     'forceRefetch? currentArg !== previousArg: ' +
      //       (currentArg !== previousArg),
      //   );
      //   return currentArg !== previousArg;
      // },
    }),
  }),
});

export const { useGetCommunitiesQuery, useGetPostsQuery } = lemmyApi;
