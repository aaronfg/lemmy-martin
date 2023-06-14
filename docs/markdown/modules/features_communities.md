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

## Functions

### communitiesReducer

▸ **communitiesReducer**(`state`, `action`): [`ICommunitesState`](../interfaces/features_communities_types.ICommunitesState.md)

A *reducer* (also called a *reducing function*) is a function that accepts
an accumulation and a value and returns a new accumulation. They are used
to reduce a collection of values down to a single value

Reducers are not unique to Redux—they are a fundamental concept in
functional programming.  Even most non-functional languages, like
JavaScript, have a built-in API for reducing. In JavaScript, it's
`Array.prototype.reduce()`.

In Redux, the accumulated value is the state object, and the values being
accumulated are actions. Reducers calculate a new state given the previous
state and an action. They must be *pure functions*—functions that return
the exact same output for given inputs. They should also be free of
side-effects. This is what enables exciting features like hot reloading and
time travel.

Reducers are the most important concept in Redux.

*Do not put API calls into reducers.*

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `undefined` \| [`ICommunitesState`](../interfaces/features_communities_types.ICommunitesState.md) |
| `action` | `AnyAction` |

#### Returns

[`ICommunitesState`](../interfaces/features_communities_types.ICommunitesState.md)
