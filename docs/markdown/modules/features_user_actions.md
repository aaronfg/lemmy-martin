[LemmyMartin - v0.0.1](../README.md) / features/user/actions

# Module: features/user/actions

## Table of contents

### Functions

- [userUIFeedCurrentPostUpdated](features_user_actions.md#useruifeedcurrentpostupdated)
- [userUIFeedListingTypeUpdated](features_user_actions.md#useruifeedlistingtypeupdated)
- [userUIFeedPageUpdated](features_user_actions.md#useruifeedpageupdated)
- [userUIFeedSortTypeUpdated](features_user_actions.md#useruifeedsorttypeupdated)

## Functions

### userUIFeedCurrentPostUpdated

▸ **userUIFeedCurrentPostUpdated**(`payload`): `Object`

Dispatched when the current post on the Feed screen has changed

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `PostView` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `payload` | `PostView` |
| `type` | `string` |

___

### userUIFeedListingTypeUpdated

▸ **userUIFeedListingTypeUpdated**(`payload`): `Object`

Dispatched when the feed type has changed

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `ListingType` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `payload` | `ListingType` |
| `type` | `string` |

___

### userUIFeedPageUpdated

▸ **userUIFeedPageUpdated**(`payload`): `Object`

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

### userUIFeedSortTypeUpdated

▸ **userUIFeedSortTypeUpdated**(`payload`): `Object`

Dispatched when the sort of the feed has been changed

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `SortType` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `payload` | `SortType` |
| `type` | `string` |
