[LemmyMartin - v0.0.1](../README.md) / features/settings/selectors

# Module: features/settings/selectors

## Table of contents

### Functions

- [getAccounts](features_settings_selectors.md#getaccounts)
- [getSettingsCurrentAccount](features_settings_selectors.md#getsettingscurrentaccount)
- [getSettingsFeedSource](features_settings_selectors.md#getsettingsfeedsource)

## Functions

### getAccounts

▸ **getAccounts**(`state`, `...params`): `Set`<[`IAccount`](../interfaces/features_settings_types.IAccount.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `Object` |
| `...params` | [] |

#### Returns

`Set`<[`IAccount`](../interfaces/features_settings_types.IAccount.md)\>

___

### getSettingsCurrentAccount

▸ **getSettingsCurrentAccount**(`state`): `undefined` \| [`IAccount`](../interfaces/features_settings_types.IAccount.md)

Returns the currently selected account (if there is one)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `Object` |

#### Returns

`undefined` \| [`IAccount`](../interfaces/features_settings_types.IAccount.md)

___

### getSettingsFeedSource

▸ **getSettingsFeedSource**(`state`): [`FeedSource`](../enums/features_settings_types.FeedSource.md)

Returns the feed source of our `settings` slice

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `Object` |

#### Returns

[`FeedSource`](../enums/features_settings_types.FeedSource.md)
