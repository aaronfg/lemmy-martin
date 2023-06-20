[LemmyMartin - v0.0.1](../README.md) / features/settings/actions

# Module: features/settings/actions

## Table of contents

### Functions

- [settingsCurrentAccountChanged](features_settings_actions.md#settingscurrentaccountchanged)
- [settingsUpdateAccounts](features_settings_actions.md#settingsupdateaccounts)

## Functions

### settingsCurrentAccountChanged

▸ **settingsCurrentAccountChanged**(`payload`): `Object`

Calling this redux#ActionCreator with an argument will
return a PayloadAction of type `T` with a payload of `P`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`IAccount`](../interfaces/features_settings_types.IAccount.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `payload` | [`IAccount`](../interfaces/features_settings_types.IAccount.md) |
| `type` | `string` |

___

### settingsUpdateAccounts

▸ **settingsUpdateAccounts**(`payload`): `Object`

Dsipatched when we update the accounts that have been saved.

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`IAccount`](../interfaces/features_settings_types.IAccount.md)[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `payload` | [`IAccount`](../interfaces/features_settings_types.IAccount.md)[] |
| `type` | `string` |
