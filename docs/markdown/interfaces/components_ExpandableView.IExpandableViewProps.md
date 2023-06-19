[LemmyMartin - v0.0.1](../README.md) / [components/ExpandableView](../modules/components_ExpandableView.md) / IExpandableViewProps

# Interface: IExpandableViewProps

[components/ExpandableView](../modules/components_ExpandableView.md).IExpandableViewProps

Props for the [ExpandableView](../modules/components_ExpandableView.md#expandableview) component

## Table of contents

### Properties

- [contentContainerStyle](components_ExpandableView.IExpandableViewProps.md#contentcontainerstyle)
- [contentView](components_ExpandableView.IExpandableViewProps.md#contentview)
- [headerView](components_ExpandableView.IExpandableViewProps.md#headerview)
- [onStateChange](components_ExpandableView.IExpandableViewProps.md#onstatechange)

## Properties

### contentContainerStyle

• `Optional` **contentContainerStyle**: `StyleProp`<`ViewStyle`\>

Optional style for the container view of the `contentView`

___

### contentView

• **contentView**: `Element`

The view that is shown/hidden by the collapsing/opening

___

### headerView

• **headerView**: `Element`

The view that users click on

___

### onStateChange

• `Optional` **onStateChange**: (`collapsed`: `boolean`) => `void`

#### Type declaration

▸ (`collapsed`): `void`

Event handler when the collapsed state of the component changes

##### Parameters

| Name | Type |
| :------ | :------ |
| `collapsed` | `boolean` |

##### Returns

`void`
