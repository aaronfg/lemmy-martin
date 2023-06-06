[LemmyMartin - v0.0.1](../README.md) / features/lemmy/selectors

# Module: features/lemmy/selectors

## Table of contents

### Functions

- [getLemmyAPIError](features_lemmy_selectors.md#getlemmyapierror)
- [getLemmyAPILoading](features_lemmy_selectors.md#getlemmyapiloading)
- [getLemmyJWT](features_lemmy_selectors.md#getlemmyjwt)

## Functions

### getLemmyAPIError

▸ **getLemmyAPIError**(`state`): `undefined` \| [`IError`](../interfaces/types.IError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `Object` |

#### Returns

`undefined` \| [`IError`](../interfaces/types.IError.md)

___

### getLemmyAPILoading

▸ **getLemmyAPILoading**(`state`): `boolean`

Returns `true` if we're loading data from the API

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `Object` |

#### Returns

`boolean`

___

### getLemmyJWT

▸ **getLemmyJWT**(`state`): `undefined` \| `string`

Returns the Lemmy API token (`jwt`) for our user if there is one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `Object` | Our redux state |

#### Returns

`undefined` \| `string`