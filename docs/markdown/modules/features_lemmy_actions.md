[LemmyMartin - v0.0.1](../README.md) / features/lemmy/actions

# Module: features/lemmy/actions

## Table of contents

### Functions

- [lemmyClearError](features_lemmy_actions.md#lemmyclearerror)
- [lemmyLogin](features_lemmy_actions.md#lemmylogin)

## Functions

### lemmyClearError

▸ **lemmyClearError**(`noArgument`): `Object`

Calling this redux#ActionCreator will
return a PayloadAction of type `T` with a payload of `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `noArgument` | `void` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `payload` | `undefined` |
| `type` | ``"lemmy/clearError"`` |

___

### lemmyLogin

▸ **lemmyLogin**(`arg`): `AsyncThunkAction`<`LoginResponse`, [`ILemmyLoginParams`](../interfaces/features_lemmy_types.ILemmyLoginParams.md), { `dispatch?`: `Dispatch`<`AnyAction`\> ; `extra?`: `unknown` ; `fulfilledMeta?`: `unknown` ; `pendingMeta?`: `unknown` ; `rejectValue`: [`IError`](../interfaces/types.IError.md) ; `rejectedMeta?`: `unknown` ; `serializedErrorType?`: `unknown` ; `state?`: `unknown`  }\>

Dispatched when a user attempts to log in.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | [`ILemmyLoginParams`](../interfaces/features_lemmy_types.ILemmyLoginParams.md) |

#### Returns

`AsyncThunkAction`<`LoginResponse`, [`ILemmyLoginParams`](../interfaces/features_lemmy_types.ILemmyLoginParams.md), { `dispatch?`: `Dispatch`<`AnyAction`\> ; `extra?`: `unknown` ; `fulfilledMeta?`: `unknown` ; `pendingMeta?`: `unknown` ; `rejectValue`: [`IError`](../interfaces/types.IError.md) ; `rejectedMeta?`: `unknown` ; `serializedErrorType?`: `unknown` ; `state?`: `unknown`  }\>
