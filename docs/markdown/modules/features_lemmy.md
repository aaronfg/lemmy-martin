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

The initial state of the `lemmy` slice of our redux store

## Functions

### lemmyReducer

▸ **lemmyReducer**(`state`, `action`): [`ILemmyState`](../interfaces/features_lemmy_types.ILemmyState.md)

Reducer for the `lemmy` slice of our redux store

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `undefined` \| [`ILemmyState`](../interfaces/features_lemmy_types.ILemmyState.md) |
| `action` | `AnyAction` |

#### Returns

[`ILemmyState`](../interfaces/features_lemmy_types.ILemmyState.md)
