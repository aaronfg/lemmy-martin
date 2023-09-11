[LemmyMartin - v0.0.1](../README.md) / features/user/selectors

# Module: features/user/selectors

## Table of contents

### Functions

- [getUserUIFeedCurrentPost](features_user_selectors.md#getuseruifeedcurrentpost)
- [getUserUIFeedPage](features_user_selectors.md#getuseruifeedpage)
- [getUserUIFeedSortType](features_user_selectors.md#getuseruifeedsorttype)
- [getUserUIFeedType](features_user_selectors.md#getuseruifeedtype)

## Functions

### getUserUIFeedCurrentPost

▸ **getUserUIFeedCurrentPost**(`state`): `undefined` \| `PostView`

Returns the currently selected post on the Feeds screen

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `Object` | The redux state |

#### Returns

`undefined` \| `PostView`

___

### getUserUIFeedPage

▸ **getUserUIFeedPage**(`state`): `number`

Returns the page of paginated data for the Feeds screen

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `Object` | The redux state |

#### Returns

`number`

___

### getUserUIFeedSortType

▸ **getUserUIFeedSortType**(`state`): `SortType`

Returns the current sort type for the Feeds screen

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `Object` | The redux state |

#### Returns

`SortType`

___

### getUserUIFeedType

▸ **getUserUIFeedType**(`state`): `ListingType`

Returns the current feed list type for the Feeds screen

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `Object` | The redux state |

#### Returns

`ListingType`
