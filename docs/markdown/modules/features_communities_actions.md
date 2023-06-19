[LemmyMartin - v0.0.1](../README.md) / features/communities/actions

# Module: features/communities/actions

## Table of contents

### Functions

- [communitiesPageUpdated](features_communities_actions.md#communitiespageupdated)
- [communitiesTest](features_communities_actions.md#communitiestest)

## Functions

### communitiesPageUpdated

▸ **communitiesPageUpdated**(`payload`): `Object`

Dispatched when the Communities list page we are loading changes

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

### communitiesTest

▸ **communitiesTest**(`noArgument`): `Object`

Calling this redux#ActionCreator will
return a PayloadAction of type `T` with a payload of `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `noArgument` | `void` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `payload` | `undefined` |
| `type` | ``"communities/testAction"`` |
