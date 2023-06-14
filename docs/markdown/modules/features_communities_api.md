[LemmyMartin - v0.0.1](../README.md) / features/communities/api

# Module: features/communities/api

## Table of contents

### Variables

- [communityApi](features_communities_api.md#communityapi)

### Functions

- [useGetCommunitiesQuery](features_communities_api.md#usegetcommunitiesquery)

## Variables

### communityApi

• `Const` **communityApi**: `Api`<`BaseQueryFn`<`string` \| `FetchArgs`, `unknown`, `FetchBaseQueryError`, {}, `FetchBaseQueryMeta`\>, { `getCommunities`: `QueryDefinition`<`ListCommunities`, `BaseQueryFn`<`string` \| `FetchArgs`, `unknown`, `FetchBaseQueryError`, {}, `FetchBaseQueryMeta`\>, `never`, `CommunityView`[], ``"communitiesApi"``\>  }, ``"communitiesApi"``, `never`, typeof `coreModuleName` \| typeof `reactHooksModuleName`\>

The RTK Query api for community related api calls

## Functions

### useGetCommunitiesQuery

▸ **useGetCommunitiesQuery**<`R`\>(`arg`, `options?`): `UseQueryHookResult`<`QueryDefinition`<`ListCommunities`, `BaseQueryFn`<`string` \| `FetchArgs`, `unknown`, `FetchBaseQueryError`, {}, `FetchBaseQueryMeta`\>, `never`, `CommunityView`[], ``"communitiesApi"``\>, `R`\>

A React hook that automatically triggers fetches of data from an endpoint, 'subscribes' the component to the cached data, and reads the request status and cached data from the Redux store. The component will re-render as the loading status changes and the data becomes available.

The query arg is used as a cache key. Changing the query arg will tell the hook to re-fetch the data if it does not exist in the cache already, and the hook will return the data for that query arg once it's available.

This hook combines the functionality of both [`useQueryState`](#usequerystate) and [`useQuerySubscription`](#usequerysubscription) together, and is intended to be used in the majority of situations.

#### Features

- Automatically triggers requests to retrieve data based on the hook argument and whether cached data exists by default
- 'Subscribes' the component to keep cached data in the store, and 'unsubscribes' when the component unmounts
- Accepts polling/re-fetching options to trigger automatic re-fetches when the corresponding criteria is met
- Returns the latest request status and cached data from the Redux store
- Re-renders as the request status changes and data becomes available

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `Record`<`string`, `any`\> = `UseQueryStateDefaultResult`<`QueryDefinition`<`ListCommunities`, `BaseQueryFn`<`string` \| `FetchArgs`, `unknown`, `FetchBaseQueryError`, {}, `FetchBaseQueryMeta`\>, `never`, `CommunityView`[], ``"communitiesApi"``\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `ListCommunities` \| typeof `skipToken` |
| `options?` | `UseQuerySubscriptionOptions` & `UseQueryStateOptions`<`QueryDefinition`<`ListCommunities`, `BaseQueryFn`<`string` \| `FetchArgs`, `unknown`, `FetchBaseQueryError`, {}, `FetchBaseQueryMeta`\>, `never`, `CommunityView`[], ``"communitiesApi"``\>, `R`\> |

#### Returns

`UseQueryHookResult`<`QueryDefinition`<`ListCommunities`, `BaseQueryFn`<`string` \| `FetchArgs`, `unknown`, `FetchBaseQueryError`, {}, `FetchBaseQueryMeta`\>, `never`, `CommunityView`[], ``"communitiesApi"``\>, `R`\>
