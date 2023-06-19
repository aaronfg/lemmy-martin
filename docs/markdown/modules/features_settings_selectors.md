[LemmyMartin - v0.0.1](../README.md) / features/settings/selectors

# Module: features/settings/selectors

## Table of contents

### Functions

- [getAccounts](features_settings_selectors.md#getaccounts)
- [getCurrentInstance](features_settings_selectors.md#getcurrentinstance)
- [getSettingsCurrentAccount](features_settings_selectors.md#getsettingscurrentaccount)
- [getSettingsCurrentAccountToken](features_settings_selectors.md#getsettingscurrentaccounttoken)
- [getSettingsDefaultInstance](features_settings_selectors.md#getsettingsdefaultinstance)
- [getSettingsFeedSource](features_settings_selectors.md#getsettingsfeedsource)

## Functions

### getAccounts

▸ **getAccounts**(`state`, `...params`): `Set`<[`IAccount`](../interfaces/features_settings_types.IAccount.md)\>

Returns the saved accounts as a Set

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `Object` |
| `...params` | [] |

#### Returns

`Set`<[`IAccount`](../interfaces/features_settings_types.IAccount.md)\>

___

### getCurrentInstance

▸ **getCurrentInstance**(`state`, `...params`): [`ILemmyInstance`](../interfaces/features_lemmy_types.ILemmyInstance.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `Object` |
| `...params` | [] |

#### Returns

[`ILemmyInstance`](../interfaces/features_lemmy_types.ILemmyInstance.md)

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

### getSettingsCurrentAccountToken

▸ **getSettingsCurrentAccountToken**(`state`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `Object` |

#### Returns

`undefined` \| `string`

___

### getSettingsDefaultInstance

▸ **getSettingsDefaultInstance**(`state`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `Object` |

#### Returns

`string`

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
