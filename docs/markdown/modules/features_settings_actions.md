[LemmyMartin - v0.0.1](../README.md) / features/settings/actions

# Module: features/settings/actions

## Table of contents

### Functions

- [settingsCurrentAccountChanged](features_settings_actions.md#settingscurrentaccountchanged)
- [settingsFeedPageUpdated](features_settings_actions.md#settingsfeedpageupdated)
- [settingsUpdateAccounts](features_settings_actions.md#settingsupdateaccounts)

## Functions

### settingsCurrentAccountChanged

▸ **settingsCurrentAccountChanged**(`payload`): `Object`

Dispatched when the current account being used has changed

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

### settingsFeedPageUpdated

▸ **settingsFeedPageUpdated**(`payload`): `Object`

Dispatched when the page of results in the Feed has changed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `payload` | `number` |
| `type` | `string` |

___

### settingsUpdateAccounts

▸ **settingsUpdateAccounts**(`payload`): `Object`

Dispatched when we update the accounts that have been saved.

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
