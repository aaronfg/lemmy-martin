[LemmyMartin - v0.0.1](../README.md) / features/lemmy

# Module: features/lemmy

## Table of contents

### Variables

- [INITIAL\_LEMMY\_STATE](features_lemmy.md#initial_lemmy_state)

### Functions

- [lemmyReducer](features_lemmy.md#lemmyreducer)

## Variables

### INITIAL\_LEMMY\_STATE

• `Const` **INITIAL\_LEMMY\_STATE**: [`ILemmyState`](../interfaces/features_lemmy_types.ILemmyState.md)

## Functions

### lemmyReducer

▸ **lemmyReducer**(`state`, `action`): [`ILemmyState`](../interfaces/features_lemmy_types.ILemmyState.md)

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
| `state` | `undefined` \| [`ILemmyState`](../interfaces/features_lemmy_types.ILemmyState.md) |
| `action` | `AnyAction` |

#### Returns

[`ILemmyState`](../interfaces/features_lemmy_types.ILemmyState.md)
