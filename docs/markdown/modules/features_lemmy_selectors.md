[LemmyMartin - v0.0.1](../README.md) / features/lemmy/selectors

# Module: features/lemmy/selectors

## Table of contents

### Functions

- [getLemmyAPIBaseUrl](features_lemmy_selectors.md#getlemmyapibaseurl)
- [getLemmyAPICommentsRaw](features_lemmy_selectors.md#getlemmyapicommentsraw)
- [getLemmyAPIError](features_lemmy_selectors.md#getlemmyapierror)
- [getLemmyAPILoading](features_lemmy_selectors.md#getlemmyapiloading)
- [getLemmyComments](features_lemmy_selectors.md#getlemmycomments)
- [getLemmyJWT](features_lemmy_selectors.md#getlemmyjwt)
- [getLemmyLoginError](features_lemmy_selectors.md#getlemmyloginerror)

## Functions

### getLemmyAPIBaseUrl

▸ **getLemmyAPIBaseUrl**(`state`, `...params`): `URL`

Returns the base url for the current instance. If no current instance
exists, will return the default instance base url.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `Object` |
| `...params` | [] |

#### Returns

`URL`

___

### getLemmyAPICommentsRaw

▸ **getLemmyAPICommentsRaw**(`state`): `undefined` \| `CommentView`[]

Returns the raw response returned from the server for the current
post's comments

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `Object` | The redux state |

#### Returns

`undefined` \| `CommentView`[]

___

### getLemmyAPIError

▸ **getLemmyAPIError**(`state`): `undefined` \| [`IError`](../interfaces/types.IError.md)

Returns any error object we have related to the Lemmy API.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `Object` | The redux state |

#### Returns

`undefined` \| [`IError`](../interfaces/types.IError.md)

___

### getLemmyAPILoading

▸ **getLemmyAPILoading**(`state`): `boolean`

Returns `true` if we're loading data from the API

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `Object` | The redux state |

#### Returns

`boolean`

___

### getLemmyComments

▸ **getLemmyComments**(`state`, `...params`): [`IParsedComment`](../interfaces/features_lemmy_types.IParsedComment.md)[]

Returns the current post's comments, formatted for use in
the list items on the Post view comments list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `Object` |
| `...params` | [] |

#### Returns

[`IParsedComment`](../interfaces/features_lemmy_types.IParsedComment.md)[]

___

### getLemmyJWT

▸ **getLemmyJWT**(`state`): `undefined` \| `string`

Returns the Lemmy API token (`jwt`) for our user if there is one.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `Object` | The redux state |

#### Returns

`undefined` \| `string`

___

### getLemmyLoginError

▸ **getLemmyLoginError**(`state`): `undefined` \| [`IError`](../interfaces/types.IError.md)

Returns any error object we have in from the Lemmy API.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `Object` | The redux state export const getLemmyAPIError = (state: RootState) => state.lemmy.error; /** Returns any error object we have in from the Lemmy API related to logging in. |

#### Returns

`undefined` \| [`IError`](../interfaces/types.IError.md)
