[LemmyMartin - v0.0.1](../README.md) / features/communities

# Module: features/communities

## Table of contents

### Variables

- [INITIAL\_COMMUNITIES\_STATE](features_communities.md#initial_communities_state)

### Functions

- [communitiesReducer](features_communities.md#communitiesreducer)

## Variables

### INITIAL\_COMMUNITIES\_STATE

• `Const` **INITIAL\_COMMUNITIES\_STATE**: [`ICommunitesState`](../interfaces/features_communities_types.ICommunitesState.md)

The initial state for the `communites` slice of our redux store

## Functions

### communitiesReducer

▸ **communitiesReducer**(`state`, `action`): [`ICommunitesState`](../interfaces/features_communities_types.ICommunitesState.md)

Reducer for the `communities` slice of the redux store

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `undefined` \| [`ICommunitesState`](../interfaces/features_communities_types.ICommunitesState.md) |
| `action` | `AnyAction` |

#### Returns

[`ICommunitesState`](../interfaces/features_communities_types.ICommunitesState.md)
