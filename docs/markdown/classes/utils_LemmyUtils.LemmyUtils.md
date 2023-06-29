[LemmyMartin - v0.0.1](../README.md) / [utils/LemmyUtils](../modules/utils_LemmyUtils.md) / LemmyUtils

# Class: LemmyUtils

[utils/LemmyUtils](../modules/utils_LemmyUtils.md).LemmyUtils

Class with utility methods related to Lemmy API and accounts

## Table of contents

### Constructors

- [constructor](utils_LemmyUtils.LemmyUtils.md#constructor)

### Methods

- [createILemmyInstance](utils_LemmyUtils.LemmyUtils.md#createilemmyinstance)
- [getDescriptionFirstParagraph](utils_LemmyUtils.LemmyUtils.md#getdescriptionfirstparagraph)
- [getDescriptionHasMultiParagraphs](utils_LemmyUtils.LemmyUtils.md#getdescriptionhasmultiparagraphs)
- [getFormattedNumber](utils_LemmyUtils.LemmyUtils.md#getformattednumber)
- [getFriendlyErrorMsg](utils_LemmyUtils.LemmyUtils.md#getfriendlyerrormsg)
- [getPostCommunityForItem](utils_LemmyUtils.LemmyUtils.md#getpostcommunityforitem)
- [getPostUrlShort](utils_LemmyUtils.LemmyUtils.md#getposturlshort)
- [getShortDescription](utils_LemmyUtils.LemmyUtils.md#getshortdescription)
- [getUpdatedAccounts](utils_LemmyUtils.LemmyUtils.md#getupdatedaccounts)
- [isDescriptionLong](utils_LemmyUtils.LemmyUtils.md#isdescriptionlong)
- [isNewAccount](utils_LemmyUtils.LemmyUtils.md#isnewaccount)

## Constructors

### constructor

• **new LemmyUtils**()

## Methods

### createILemmyInstance

▸ `Static` **createILemmyInstance**(`instance`): [`ILemmyInstance`](../interfaces/features_lemmy_types.ILemmyInstance.md)

Creates an [ILemmyInstance](../interfaces/features_lemmy_types.ILemmyInstance.md) from
the `instance` string passed in

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `instance` | `string` | The string to base the logic on |

#### Returns

[`ILemmyInstance`](../interfaces/features_lemmy_types.ILemmyInstance.md)

___

### getDescriptionFirstParagraph

▸ `Static` **getDescriptionFirstParagraph**(`description`): `string`

Returns the first paragraph of a Community's `description`
passed in.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `description` | `string` | The Community description to test |

#### Returns

`string`

___

### getDescriptionHasMultiParagraphs

▸ `Static` **getDescriptionHasMultiParagraphs**(`description`): `boolean`

Returns `true` if the `description` has multiple paragraphs.

This is used in conjunction with [getDescriptionFirstParagraph](utils_LemmyUtils.LemmyUtils.md#getdescriptionfirstparagraph)
to get a shorter, list-friendly description.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `description` | `string` | The Community description to test |

#### Returns

`boolean`

___

### getFormattedNumber

▸ `Static` **getFormattedNumber**(`rawNumber`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawNumber` | `number` |

#### Returns

`string`

___

### getFriendlyErrorMsg

▸ `Static` **getFriendlyErrorMsg**(`error`): `string`

Returns a user-friendly error message given the API-provided `error`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error` | `string` | The error string to base the frfiendly message on |

#### Returns

`string`

___

### getPostCommunityForItem

▸ `Static` **getPostCommunityForItem**(`community`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `community` | `Community` |

#### Returns

`string`

___

### getPostUrlShort

▸ `Static` **getPostUrlShort**(`fullUrl`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fullUrl` | `string` |

#### Returns

`string`

___

### getShortDescription

▸ `Static` **getShortDescription**(`description`): `string`

Truncates the `description` to a shorter manageable length
for use in the [CommunitiesScreen](../modules/screens_Communities.md#communitiesscreen) screen

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `description` | `string` | The Community description to truncate |

#### Returns

`string`

___

### getUpdatedAccounts

▸ `Static` **getUpdatedAccounts**(`newAccount`, `accounts`): [`IAccount`](../interfaces/features_settings_types.IAccount.md)[]

Will update the `accounts` passed in with the `newAccount` and return the
new Set.

This is used both when we have a brand new account AND also when we have a
new token for an existing account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newAccount` | [`IAccount`](../interfaces/features_settings_types.IAccount.md) | The new account |
| `accounts` | `Set`<[`IAccount`](../interfaces/features_settings_types.IAccount.md)\> | The existing accounts we have saved in the redux store |

#### Returns

[`IAccount`](../interfaces/features_settings_types.IAccount.md)[]

___

### isDescriptionLong

▸ `Static` **isDescriptionLong**(`description`): `boolean`

Returns `true` if the provided `description` is longer than
the `COMMUNITY_MAX_DESCRIPTION_LENGTH`.

Used in the Communities Screen to truncate the Community
description text in the list.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `description` | `string` | The Community description to test |

#### Returns

`boolean`

___

### isNewAccount

▸ `Static` **isNewAccount**(`account`, `accounts`): `boolean`

Returns `true` if the `account` passed in is not already present in the
Set of `accounts`.

This check does not care about the [token](../interfaces/features_settings_types.IAccount.md#token) property of the account
as this check is used for updating the account with a new token upon login.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | [`IAccount`](../interfaces/features_settings_types.IAccount.md) | The account to check |
| `accounts` | `Set`<[`IAccount`](../interfaces/features_settings_types.IAccount.md)\> | The existing accounts we have saved in the redux store |

#### Returns

`boolean`
