[LemmyMartin - v0.0.1](../README.md) / features/user

# Module: features/user

## Table of contents

### Variables

- [INITIAL\_USER\_STATE](features_user.md#initial_user_state)

### Functions

- [userReducer](features_user.md#userreducer)

## Variables

### INITIAL\_USER\_STATE

• `Const` **INITIAL\_USER\_STATE**: [`IUserState`](../interfaces/features_user_types.IUserState.md)

The initial state for the `user` slice of our redux store

## Functions

### userReducer

▸ **userReducer**(`state`, `action`): [`IUserState`](../interfaces/features_user_types.IUserState.md)

Reducer for the `user` slice of the redux store

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `undefined` \| [`IUserState`](../interfaces/features_user_types.IUserState.md) |
| `action` | `AnyAction` |

#### Returns

[`IUserState`](../interfaces/features_user_types.IUserState.md)
