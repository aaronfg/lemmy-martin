[LemmyMartin - v0.0.1](../README.md) / features/communities/selectors

# Module: features/communities/selectors

## Table of contents

### Functions

- [getCommunitesListPage](features_communities_selectors.md#getcommuniteslistpage)
- [getCommunityAPICommunitiesRaw](features_communities_selectors.md#getcommunityapicommunitiesraw)
- [getCommunityListItems](features_communities_selectors.md#getcommunitylistitems)

## Functions

### getCommunitesListPage

▸ **getCommunitesListPage**(`state`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `Object` |

#### Returns

`number`

___

### getCommunityAPICommunitiesRaw

▸ **getCommunityAPICommunitiesRaw**(`state`): `undefined` \| `CommunityView`[]

Gets the Communities returned from the communityApi.getCommunities endpoint

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `Object` |

#### Returns

`undefined` \| `CommunityView`[]

___

### getCommunityListItems

▸ **getCommunityListItems**(`state`, `...params`): [`ICommunityListItem`](../interfaces/features_communities_types.ICommunityListItem.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `Object` |
| `...params` | [] |

#### Returns

[`ICommunityListItem`](../interfaces/features_communities_types.ICommunityListItem.md)[]
