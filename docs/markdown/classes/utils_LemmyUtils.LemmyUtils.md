[LemmyMartin - v0.0.1](../README.md) / [utils/LemmyUtils](../modules/utils_LemmyUtils.md) / LemmyUtils

# Class: LemmyUtils

[utils/LemmyUtils](../modules/utils_LemmyUtils.md).LemmyUtils

Class with utility methods related to Lemmy API and accounts

## Table of contents

### Constructors

- [constructor](utils_LemmyUtils.LemmyUtils.md#constructor)

### Methods

- [getUpdatedAccounts](utils_LemmyUtils.LemmyUtils.md#getupdatedaccounts)
- [isNewAccount](utils_LemmyUtils.LemmyUtils.md#isnewaccount)

## Constructors

### constructor

• **new LemmyUtils**()

## Methods

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
